import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', subcategories: ['Introduction', 'Teachers', 'Category'] },
    { name: 'Courses', href: '/courses', subcategories: ['Category', 'Category', 'Category'] },
    { name: 'Campuses', href: '/campuses' },
    { name: 'Success', href: '/success' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      {/* Desktop Header */}
      <header className="hidden lg:block relative w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 mt-3">
          <div className="inline-flex items-center space-x-2">
            <span>
              {/* Your logo SVG */}
            </span>
            <span className="font-bold">DevUI</span>
          </div>
          <div>
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                  {item.subcategories && (
                    <div className="absolute hidden w-auto group-hover:block  bg-white rounded-md shadow-lg z-10">
                      {item.subcategories.map((subcategory, index) => (
                        <a
                          key={index}
                          href={`${item.href}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subcategory}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Button text
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Header */}
      <div className="lg:hidden">
        <header className="relative w-full border-b bg-white pb-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
            <div className="inline-flex items-center space-x-2">
              <span>
                {/* Your logo SVG */}
              </span>
              <span className="font-bold">DevUI</span>
            </div>
            <div>
              <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
            </div>
            {isMenuOpen && (
              <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center space-x-2">
                        <span>
                          {/* Your mobile logo SVG */}
                        </span>
                        <span className="font-bold">DevUI</span>
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span className="sr-only">Close menu</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-4">
                        {menuItems.map((item) => (
                          <div key={item.name}>
                            <a
                              href={item.href}
                              className="m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                            >
                              <span className="ml-3 text-base font-medium text-gray-900">
                                {item.name}
                              </span>
                            </a>
                            {item.subcategories && (
                              <div className="mt-2 ml-6">
                                {item.subcategories.map((subcategory, index) => (
                                  <a
                                    key={index}
                                    href={`${item.href}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {subcategory}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </nav>
                    </div>
                    {/* <button
                      type="button"
                      className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Donate Now
                    </button> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
