import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/contact', label: 'Contact' },
        { to: '/github', label: 'GitHub', external: true },
        
    ];

    return (
        <header className="sticky top-0 z-50 shadow bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <svg
                            className="mr-3 h-16 w-16 transition-transform duration-300 group-hover:scale-105"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="40" height="40" rx="8" fill="#3B82F6" />
                            <path d="M20 10L30 20L20 30L10 20L20 10Z" fill="white" />
                        </svg>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="ml-3 inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop links */}
                    <div className={`w-full lg:block lg:w-auto ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                        <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                            {navLinks.map(({ to, label, external }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        target={external ? '_blank' : undefined}
                                        rel={external ? 'noopener noreferrer' : undefined}
                                        className={({ isActive }) =>
                                            `block rounded py-2 pr-4 pl-3 transition-colors lg:p-0
                      ${isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Auth buttons */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-3">
                        <Link
                            to="/login"
                            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

