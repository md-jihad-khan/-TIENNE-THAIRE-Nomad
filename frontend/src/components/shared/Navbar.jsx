import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { title: "HOME", path: "/" },
    { title: "BIOGRAPHIE", path: "/biographie" },
    { title: "LIVRES", path: "/livres" },
    { title: "VOYAGES", path: "/voyages" },
    { title: "NOMAD BLACK SHEEP", path: "/nomad-black-sheep" },
    { title: "COLLECTION CINÉMA", path: "/collection-cinema" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm fixed w-full z-50">
      {/* Left (Mobile Dropdown + Logo) */}
      <div className="navbar-start lg:hidden">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow cormorant-garamond"
          >
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold border-b border-black rounded-none"
                      : "hover:border-b border-black/60 rounded-none hover:bg-transparent"
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center (Desktop Menu - Perfectly Centered) */}
      <div className="hidden w-full lg:flex items-center justify-center">
        <ul className="menu menu-horizontal px-1 text-base font-normal cormorant-garamond">
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b border-black rounded-none"
                    : "hover:border-b border-black/60 rounded-none hover:bg-transparent"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
