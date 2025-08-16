// Blog.jsx
import React, { useEffect, useState } from 'react';

// Replace with your Hashnode username
const HASHNODE_USERNAME = 'mohammadosama';

const GET_POSTS = `
  query GetPosts($page: Int!) {
    user(username: "${HASHNODE_USERNAME}") {
      publication {
        posts(page: $page) {
          _id
          title
          brief
          slug
          coverImage
          dateAdded
        }
      }
    }
  }
`;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        const res = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: GET_POSTS, variables: { page: 0 } }),
          signal: controller.signal,
        });

        const json = await res.json();
        const data = json?.data?.user?.publication?.posts || [];
        setPosts(data);
      } catch (err) {
        if (!controller.signal.aborted) setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
    return () => controller.abort();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <svg
          className="animate-spin h-8 w-8 text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );

  if (error)
    return (
      <p className="text-center text-red-600 dark:text-red-400">
        Couldn’t load posts: {error}
      </p>
    );

  if (!posts.length)
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No posts yet—check back soon!
      </p>
    );

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Latest Articles
      </h1>

      <div className="space-y-8">
        {posts.map(post => (
          <article
            key={post._id}
            className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm hover:shadow-lg transition bg-white dark:bg-gray-800"
          >
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="md:w-48 h-32 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                <a
                  href={`https://${HASHNODE_USERNAME}.hashnode.dev/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.title}
                </a>
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {post.brief}
              </p>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                {new Date(parseInt(post.dateAdded)).toLocaleDateString()}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}