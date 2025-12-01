import PropTypes from "prop-types";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const DropdownMenu = ({
  isOpen,
  items = [
    "Home Loan",
    "Personal Loan",
    "Business Loan",
    "Education Loan",
    "Vehicle Loan",
    "Loan Against Property",
    "Construction Loan",
    "Agricultural Loan",
    "Credit Card Loan",
    "Working Capital Loan",
    "Startup Loan",
  ],
  isMobile = false,
  onClose,
}) => {
  const handleClick = () => {
    if (onClose) onClose();
  };

  const renderItems = () =>
    items.map((item) => (
      <a
        key={item}
        href={`/${slugify(item)}`}
        onClick={handleClick}
        target="_blank"
        className="block px-4 py-2 text-slate-900 hover:bg-blue-200 hover:text-slate-950 transition-colors"
        role="menuitem"
      >
        {item}
      </a>
    ));

  // Mobile version
  if (isMobile) {
    return (
      <div
        className={`mt-2 w-full bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-1">{renderItems()}</div>
      </div>
    );
  }

  // Desktop version
  return (
    <div
      className={`absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 z-10 hidden md:block transition-all duration-300 ease-in-out transform ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      role="menu"
      aria-orientation="vertical"
      aria-hidden={!isOpen}
    >
      <div className="py-1">{renderItems()}</div>
    </div>
  );
};

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropdownName: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  isMobile: PropTypes.bool,
  onClose: PropTypes.func,
};

export default DropdownMenu;
