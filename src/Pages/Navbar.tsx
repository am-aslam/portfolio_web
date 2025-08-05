import { useState } from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AslamSadique</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-4 text-center transition-all duration-500">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};