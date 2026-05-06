// Active Link: Use usePathname to highlight the current active link.
// This improves UX by showing which page the user is on.

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();

    // State to manage the current theme (light or dark)
    const [theme, setTheme] = useState(() => {
        // Initialize theme from localStorage or default to light
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        // Apply theme to document when theme changes
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };


    // The navigation bar is responsive and includes links to Home, About (with sub-links), Contact, and Blogs. It also has a theme toggle button that switches between light and dark modes.

    return (
        <div className="navbar bg-base-100 shadow-sm text-base-content">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>


                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base-content">

                        <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li>
                            <a>About</a>
                            <ul className="p-2 text-base-content">
                                <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link></li>
                                <li><Link href="/about/designers" className={pathname === '/about/designers' ? 'active' : ''}>Designers</Link></li>
                                <li><Link href="/about/developers" className={pathname === '/about/developers' ? 'active' : ''}>Developers</Link></li>
                              
                            </ul>
                        </li>

                        <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                        <li><Link href="/blogs" className={pathname.startsWith('/blogs') ? 'active' : ''}>Blogs</Link></li>
                    </ul>


                </div>
                <Link href="/" className="btn btn-ghost text-xl text-base-content">Next.js Fundamentals</Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base-content">
                    <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
                    <li>
                        <details>
                            <summary>About</summary>
                            <ul className="p-2 bg-base-100 w-40 z-1 text-base-content">
                                <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link></li>
                                <li><Link href="/about/designers" className={pathname === '/about/designers' ? 'active' : ''}>Designers</Link></li>
                                <li><Link href="/about/developers" className={pathname === '/about/developers' ? 'active' : ''}>Developers</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li><Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                    <li><Link href="/blogs" className={pathname.startsWith('/blogs') ? 'active' : ''}>Blogs</Link></li>
                </ul>
            </div>

            {/* Theme Toggle Button */}
            <div className="navbar-end">
                <button
                    onClick={toggleTheme}
                    className="btn btn-ghost btn-circle mr-2"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    )}
                </button>
                {/* Get Started Button */}


                <a className="btn btn-primary">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;
