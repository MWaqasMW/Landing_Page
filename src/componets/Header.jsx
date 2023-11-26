



import { useState } from 'react';
import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from "../accessts/logok.jpg"
const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about', subcategories: ['Introduction', 'Teachers', 'Category'] },
  { name: 'Courses', href: '/courses', subcategories: ['Category', 'Category', 'Category'] },
  { name: 'Campuses', href: '/campuses' },
  { name: 'Success', href: '/success' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative py-5 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8  sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            {/* Your mobile logo SVG */}
          </span>
          <span className="w-20"><img src={logo} alt="logo" /></span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              // <li key={item.name}>
              //   <NavLink
              //     to={item.href}
              //     className="text-md font-semibold text-gray-800"
              //     style={{
              //       borderBottom: "3px solid transparent", // Set a transparent border initially
              //       transition: "border-bottom-color 0.3s",
              //     }}
              //   onMouseOver={(e) => { e.currentTarget.style.borderBottomColor = "#1890ff"; }}
              //   onMouseOut={(e) => { e.currentTarget.style.borderBottomColor = "transparent"; }}
              // >
              //     {item.name}
              //   </NavLink>
              // </li>

              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <NavLink
                  to={item.href}
                  className="text-md font-semibold text-gray-800"
                  style={{
                    borderBottom: hoveredItem === item.name ? '3px solid #1890ff' : '3px solid transparent',
                  }}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.name}
                </NavLink>


                {item.subcategories && hoveredItem === item.name && (
                  <div className="absolute mt-2 space-y-2 bg-white rounded-md shadow-lg">
                    {item.subcategories.map((subcategory) => (
                      <NavLink
                        key={subcategory}
                        to={`${item.href}/${subcategory.toLowerCase()}`}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        {subcategory}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="z-20 rounded-md ] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8dc63f]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{ backgroundColor: "#116ca8" }}
          >
            Donate Now
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right  lg:hidden">
            {/* Mobile menu content */}
            <div className="divide-y-0 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity ease-in-out duration-300 ">
              <div className="px-5 pb-4 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      {/* Your mobile logo SVG */}
                    </span>
                    <span className="w-20"><img src={logo} alt="logo" /></span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6 bg-[#1890ff]" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  {/* Mobile menu items */}
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        style={{
                          borderBottom: "3px solid transparent", // Set a transparent border initially
                          transition: "border-bottom-color 0.3s",
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.borderBottomColor = "#1890ff"; }}
                        onMouseOut={(e) => { e.currentTarget.style.borderBottomColor = "transparent"; }}
                      >

                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
                {/* Mobile menu button */}
                <button
                  type="button"
                  style={{ backgroundColor: "#116ca8" }}
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg focus-visible"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
