
import React from 'react'

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-10 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-12">
          {/* Image */}
          <figure className="md:w-5/12 lg:w-5/12">
            <img
              className="rounded-lg shadow-lg animate-fade"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1050&q=80"
              alt="Team of passionate React developers collaborating"
              loading="lazy"
            />

          </figure>

          {/* Text block */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
              Crafted with passion, built for scale
            </h2>

            <p className="mt-6">
              We are a tight-knit group of React engineers obsessed with clean
              code, stellar UX, and blazing-fast performance. From idea to
              production, we sweat the details so you don’t have to.
            </p>

            <p className="mt-4">
              Whether you need a green-field SPA, a server-rendered Next.js
              storefront, or seamless GraphQL APIs, we deliver solutions that
              grow with your business.
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
            >
              Let’s talk
            </a>
          </div>
        </div>
      </div>

      {/* Optional fade-in animation (respects prefers-reduced-motion) */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-fade {
            animation: fadeIn 0.8s ease-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </section>
  );
};

