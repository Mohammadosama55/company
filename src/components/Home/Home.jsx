import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section ---------------------------------------------------- */}
      <section className="relative overflow-hidden text-white bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mt-6 sm:mt-12">
        <div className="relative z-10 max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32">
          <div className="max-w-lg sm:text-right sm:ml-auto space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Build faster.
              <span className="block text-3xl sm:text-4xl mt-2 text-orange-100">
                Ship smarter.
              </span>
            </h1>
            <p className="text-orange-100 text-lg">
              Download the toolkit that thousands of developers use to turn ideas
              into production-ready apps in minutes.
            </p>
            <Link
              to="/download"
              className="inline-flex items-center gap-x-3 px-6 py-3 font-semibold
                         bg-white text-orange-600 rounded-lg shadow-md
                         hover:bg-orange-50 focus:outline-none focus-visible:ring-2
                         focus-visible:ring-offset-2 focus-visible:ring-white
                         transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M11 4.03v11.94l-3.42-3.42-1.41 1.41 5.83 5.83 5.83-5.83-1.41-1.41-3.42 3.42V4.03h-2z" />
              </svg>
              Download now
            </Link>
          </div>
        </div>

        {/* Hero image (positioned behind text on mobile) */}
        <figure className="absolute inset-0 w-full h-full">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1350&q=80"
            alt="Developers collaborating in a modern office"
          />
        </figure>
      </section>

      {/* Secondary Visual ----------------------------------------------- */}
      <section className="grid place-items-center mt-16 sm:mt-24">
        <img
          className="w-48 sm:w-80 rounded-xl shadow-lg"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=80"
          alt="Laptop displaying code editor"
        />
      </section>

      {/* Tagline --------------------------------------------------------- */}
      <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 py-10">
        Your next idea, <span className="text-orange-600">shipped today</span>.
      </h2>
    </main>
  );
};

