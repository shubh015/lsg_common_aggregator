import React from "react";
import Button from "@/design-systems/Atoms/Button";
import Image from "@/design-systems/Atoms/Image";
import logo from "../../../assets/images/logo.png";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Landing", href: "#", active: true },
  { label: "Account", href: "#" },
  { label: "Work", href: "#" },
  { label: "Blog", href: "/blogs" },
];

const baseLinkClass = "font-medium focus:outline-hidden transition-colors ";
const activeClass =
  "text-white rounded outline-none border border-gray-200 p-2 shadow-2xs hover:bg-[#141414] focus:outline-hidden focus:bg-gray-50";
const inactiveClass =
  "text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500";

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap bg-white text-sm py-3 dark:bg-neutral-800">
      <nav className="mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <Image src={logo} width={100} height={100} alt="logo" />
          <a
            className="text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
            href="#"
          >
            LokSevaGyaan
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden size-9 flex justify-center items-center rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            id="hs-navbar-alignment-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-alignment"
          >
            {/* Hamburger icon */}
            <svg
              className="hs-collapse-open:hidden size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            {/* Close icon */}
            <svg
              className="hs-collapse-open:block hidden size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle</span>
          </button>

          {/* "Contact Us" styled as Button */}
          <a href="#" className="inline-block">
            <Button as="a">Contact Us</Button>
          </a>
        </div>

        {/* Navigation Links */}
        <div
          id="hs-navbar-alignment"
          className="hs-collapse hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
          aria-labelledby="hs-navbar-alignment-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            {NAV_ITEMS.map(({ label, href, active }) => (
              <Link
                key={label}
                href={href}
                className={`${baseLinkClass} ${
                  active ? activeClass : inactiveClass
                }`}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
