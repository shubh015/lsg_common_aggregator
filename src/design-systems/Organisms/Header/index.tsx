"use client";
import React from "react";
import Link from "next/link";
import Image from "@/design-systems/Atoms/Image";
import Button from "@/design-systems/Atoms/Button";
import logo from "../../../assets/images/logo.png";
import { useThemeToggle } from "@/hooks/useThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "/", active: true },
  { label: "Account", href: "#" },
  { label: "Work", href: "#" },
  { label: "Blog", href: "/blogs" },
];

const SunIcon = (
  <svg className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
  </svg>
);

const MoonIcon = (
  <svg className="w-5 h-5 text-slate-700 group-hover:text-slate-600" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
    />
  </svg>
);

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-neutral-900/80 border-b border-gray-200/50 dark:border-neutral-700/50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image src={logo} width={40} height={40} alt="logo" className="rounded-lg shadow-md" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent hover:from-cyan-600 hover:to-blue-600 transition-all">
              LokSevaGyaan
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, href, active }) => (
              <Link
                key={label}
                href={href}
                className={`relative px-3 py-2 text-sm font-medium transition-all group ${
                  active
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-all group shadow-sm hover:shadow-md"
            >
              {isDarkMode ? SunIcon : MoonIcon}
            </button>

            {/* Contact */}
            <div className="hidden sm:block">
              <Button
                as="a"
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-all"
              aria-label="Mobile menu"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
