import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  // Refs
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const desktopDropdownButtonRef = useRef(null);
  const navbarRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "/", isHome: true },
    { name: "Loan Products", hasDropdown: true },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Calculators", href: "/loan-emi-calculator" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth >= 768) {
        // Check if the screen width is greater than or equal to 768px
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false);
        } else if (currentScrollY < lastScrollY) {
          setShowNavbar(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown &&
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target) &&
        desktopDropdownButtonRef.current &&
        !desktopDropdownButtonRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }

      if (
        isMobileDropdownOpen &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target) &&
        !mobileMenuButtonRef.current.contains(event.target)
      ) {
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown, isMobileDropdownOpen]);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className={`bg-white text-slate-900 shadow-md sticky top-0 z-50 border-b border-gray-200 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 relative">
          {/* Mobile Menu Button */}
          <div className="lg:hidden" ref={mobileMenuButtonRef}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 hover:text-yellow-500 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX
                  size={24}
                  className="transition-transform duration-300 rotate-180"
                />
              ) : (
                <FiMenu
                  size={24}
                  className="transition-transform duration-300 rotate-0"
                />
              )}
            </button>
          </div>

          {/* Left Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.slice(0, 3).map((item) =>
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    ref={
                      item.name === "Loan Products"
                        ? desktopDropdownButtonRef
                        : null
                    }
                    className="flex items-center space-x-1 text-slate-900 hover:text-blue-500 font-medium transition-colors cursor-pointer"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div ref={desktopDropdownRef}>
                    <DropdownMenu
                      isOpen={activeDropdown === item.name}
                      onClose={() => setActiveDropdown(null)}
                    />
                  </div>
                </div>
              ) : item.isHome ? (
                <button
                  key={item.name}
                  onClick={() => (window.location.href = "/")}
                  className="text-slate-900 hover:text-blue-500 font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-slate-900 hover:text-blue-500 font-medium transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="text-2xl font-bold">
              <span className="text-slate-900">Credi</span>
              <span className="text-blue-400">India</span>
            </a>
          </div>

          {/* Right Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.slice(3).map((item) =>
              item.isHome ? (
                <button
                  key={item.name}
                  className="text-slate-900 hover:text-blue-500 font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-slate-900 hover:text-blue-500 font-medium transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
            <button
              onClick={() => {
                window.open("/loan-apply", "_blank");
              }}
              className="bg-blue-900 hover:bg-blue-800 text-[#fafafa] font-medium px-5 py-2 rounded-md shadow-sm transition-colors cursor-pointer"
            >
              APPLY NOW
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden bg-white shadow-xl z-50 border-t border-gray-00 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 space-y-3">
            {menuItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="pl-2 border-b border-gray-800 pb-2"
                  ref={mobileDropdownRef}
                >
                  <button
                    className="flex justify-between items-center w-full text-slate-900 hover:text-yellow-500 font-medium py-2 transition-colors"
                    onClick={toggleMobileDropdown}
                  >
                    {item.name}
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isMobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <DropdownMenu
                    isOpen={isMobileDropdownOpen}
                    isMobile={true}
                    onClose={() => setIsMobileDropdownOpen(false)}
                  />
                </div>
              ) : item.isHome ? (
                <button
                  key={item.name}
                  className="w-full flex justify-start text-slate-900 hover:text-yellow-500 font-medium py-2 px-2 transition-colors border-b border-gray-800"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = "/";
                  }}
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="block text-slate-900 hover:text-yellow-500 font-medium py-2 px-2 transition-colors border-b border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium py-2 px-5 rounded-md mt-2 transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.open("/loan-apply", "_blank");
              }}
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
