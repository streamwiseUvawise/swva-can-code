import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoCanCode from '../assets/canCodeLogo.png';

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ============================================
     NAVIGATION MENU ITEMS
     ============================================
     To add, remove, or edit menu items, modify the array below.
     Each item needs: path (URL) and label (display text)
  */
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/find-camp', label: 'Find a Camp' },
    { path: '/showcase', label: 'Showcase' },
    { path: '/swva-can-create', label: 'SWVA Can Create' },
    { path: '/curriculum', label: 'Curriculum' },
    { path: '/contact', label: 'Contact' },
    { path: '/sponsor', label: 'Sponsor' },
  ];
  /* TO ADD A NEW MENU ITEM: Copy one line above (like { path: '/', label: 'Home' },)
     and paste it at the bottom of the list with a comma, then change the path and label */

  // Don't edit this - it highlights the active page in the menu
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Colored bar at top - decorative element using brand colors */}
      {/* To change colors, edit the color codes: [#1A237E]=navy, [#E53935]=red, [#00BCD4]=cyan */}
      <div className="h-2 bg-gradient-to-r from-[#1A237E] via-[#E53935] to-[#00BCD4]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ============================================
              LOGO & SITE NAME
              ============================================ */}
          {/* Clicking the logo always takes you back to the home page */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {/* Logo image - imported at top of file */}
            <img src={logoCanCode} alt="SWVA Can Code" className="h-16 w-16" />
            {/* Site name text - edit these lines to change the name */}
            <div className="hidden md:block">
              <div className="text-[#1A237E] font-bold text-xl leading-tight">
                Southwest Virginia
              </div>
              <div className="text-[#00BCD4] font-bold text-lg leading-tight">
                Can Code
              </div>
            </div>
          </Link>

          {/* ============================================
              DESKTOP NAVIGATION (shown on larger screens)
              ============================================ */}
          {/* This displays the menu items horizontally on desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#00BCD4] text-white'  // Active page style (cyan background)
                    : 'text-[#1A237E] hover:bg-[#00BCD4]/10'  // Inactive page style
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ============================================
              MOBILE MENU BUTTON (hamburger icon)
              ============================================ */}
          {/* This button appears on small screens to open/close the mobile menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#1A237E] hover:bg-[#00BCD4]/10"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />  // X icon when menu is open
            ) : (
              <Menu className="h-6 w-6" />  // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* ============================================
          MOBILE NAVIGATION (shown when menu button is clicked)
          ============================================ */}
      {/* This displays the menu items vertically on mobile devices */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}  // Closes menu when item is clicked
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#00BCD4] text-white'
                    : 'text-[#1A237E] hover:bg-[#00BCD4]/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}