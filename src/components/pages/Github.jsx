// Github.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';


export default function Github() {
  const repos = useLoaderData();
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('stars');
  const [page, setPage] = useState(1);
  const perPage = 6;

  /* ---------- derived data ---------- */
  const filtered = useMemo(
    () =>
      repos.filter(r =>
        r.name.toLowerCase().includes(search.toLowerCase())
      ),
    [repos, search]
  );

  const sorted = useMemo(
    () =>
      [...filtered].sort((a, b) => {
        if (sortKey === 'stars') return b.stargazers_count - a.stargazers_count;
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      }),
    [filtered, sortKey]
  );

  const paginated = useMemo(
    () => sorted.slice((page - 1) * perPage, page * perPage),
    [sorted, page]
  );

  const totalPages = Math.ceil(sorted.length / perPage);

  /* ---------- reset page when search/sort changes ---------- */
  useEffect(() => {
    setPage(1);
  }, [search, sortKey]);

  /* ---------- render ---------- */
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        My GitHub Repositories ({repos.length})
      </h1>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search repo…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="stars">Most stars</option>
          <option value="updated">Recently updated</option>
        </select>
      </div>

      {/* Repo Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="font-bold text-lg text-orange-700">{repo.name}</h2>
            <p className="text-sm text-gray-600 mt-1">
              {repo.description ?? 'No description'}
            </p>
            <div className="flex justify-between items-center mt-3 text-xs">
              <span className="font-medium">{repo.language ?? '—'}</span>
              <span>⭐ {repo.stargazers_count}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`px-3 py-1 rounded ${
                n === page
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {n}
            </button>
          ))}
        </nav>
      )}
    </section>
  );
}