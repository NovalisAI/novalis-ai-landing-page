"use client";

import React, { useState, useEffect, useRef } from "react";

const AnimatedNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const defaultTextColor = "text-white/60";
  const hoverTextColor = "text-orange-500";
  const textSizeClass = "text-xs uppercase tracking-widest font-bold";

  return (
    <a
      href={href}
      className={`group relative inline-block overflow-hidden h-5 items-center ${textSizeClass}`}
    >
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass("rounded-xl");
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass("rounded-full");
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Logo Image Placeholder */}

      {/* Text Logo */}
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-orbitron font-black tracking-tight text-white leading-none">
          NOVALIS{" "}
          <span className="bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            AI
          </span>
        </span>
      </div>
    </div>
  );

  const navLinksData = [
    { label: "About Us", href: "#1" },
    { label: "Careers", href: "#2" },
    { label: "Discover", href: "#3" },
  ];

  const loginButtonElement = (
    <button className="px-5 py-2 sm:px-4 text-xs font-bold border border-white/10 bg-white/5 text-white/80 rounded-full hover:border-orange-500/50 hover:text-white transition-all duration-300 w-full sm:w-auto backdrop-blur-md">
      LOG IN
    </button>
  );

  const signupButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div
        className="absolute inset-0 -m-1 rounded-full
                     hidden sm:block
                     bg-orange-500
                     opacity-20 filter blur-md pointer-events-none
                     transition-all duration-300 ease-out
                     group-hover:opacity-40 group-hover:blur-lg"
      ></div>
      <button className="relative z-10 px-5 py-2 sm:px-4 text-xs font-black text-white bg-orange-500 rounded-full hover:scale-105 transition-all duration-300 w-full sm:w-auto">
        SIGN UP
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-300
                       flex flex-col items-center
                       pl-6 pr-6 py-3 backdrop-blur-xl
                       ${headerShapeClass}
                       border border-white/10 bg-black/60
                       w-[calc(100%-2rem)] sm:w-auto
                       transition-[border-radius] duration-300 ease-in-out shadow-2xl`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <div className="flex items-center">{logoElement}</div>

        <nav className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <button
          className="sm:hidden flex items-center justify-center w-8 h-8 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      <div
        className={`sm:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
                       ${isOpen ? "max-h-[1000px] opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center space-y-4 text-base w-full">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors w-full text-center"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col items-center space-y-4 mt-4 w-full">
          {loginButtonElement}
          {signupButtonElement}
        </div>
      </div>
    </header>
  );
}
