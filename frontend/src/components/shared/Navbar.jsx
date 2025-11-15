import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const { t } = useTranslation("global");
  const location = useLocation();
  const navbarRef = useRef(null);

  const navLinks = [
    { title: t("nav.home"), path: "/" },
    { title: t("nav.biography"), path: "/biography" },
    {
      title: t("nav.books"),
      path: "/books",
      subLinks: [
        { title: t("nav.books_sub.roman"), path: "/books/novel" },
        { title: t("nav.books_sub.docuFiction"), path: "/books/docu-fiction" },
        { title: t("nav.books_sub.documentary"), path: "/books/documentary" },
      ],
    },
    { title: t("nav.photography"), path: "/photography" },
    { title: t("nav.nbs"), path: "/nomadblacksheep" },
  ];

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        // Close all open <details>
        document.querySelectorAll("details[open]").forEach((detail) => {
          detail.removeAttribute("open");
        });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="fixed w-full z-50 bg-white  shadow-sm">
      <motion.div
        ref={navbarRef}
        className="navbar px-3 lg:px-12 container mx-auto flex justify-between items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* LEFT: TEXT LOGO */}
        <NavLink
          to="/"
          className="font-semibold text-xl md:text-2xl tracking-widest text-primary font-jomhuria "
        >
          ÉTIENNE ÉTHAIRE
        </NavLink>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex menu menu-horizontal p-1 font-eb-garamond border-primary border-[1px] rounded-[40px] gap-2">
            {navLinks.map((link) => {
              const isSubActive =
                link.subLinks &&
                link.subLinks.some((sub) =>
                  location.pathname.startsWith(sub.path)
                );

              return link.subLinks ? (
                <li key={link.title}>
                  <details className="group" open={isSubActive}>
                    <summary
                      className={`px-5 py-1 rounded-4xl cursor-pointer transition-all duration-200 
                        ${
                          isSubActive
                            ? "bg-primary text-white"
                            : "hover:!bg-[#0c331c] hover:!text-white"
                        }`}
                    >
                      {link.title}
                    </summary>
                    <ul className="p-2 bg-white gap-1 flex flex-col shadow-lg rounded-box mt-1">
                      {link.subLinks.map((sub) => (
                        <li key={sub.title}>
                          <NavLink
                            to={sub.path}
                            className={({ isActive }) =>
                              isActive
                                ? "block bg-primary text-white rounded-3xl px-4 py-1"
                                : "block px-4 py-1 rounded-3xl transition-all duration-200 hover:!bg-[#0c331c] hover:!text-white"
                            }
                          >
                            {sub.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={link.title}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-primary text-white rounded-4xl px-5 py-1"
                        : "px-5 py-1 rounded-4xl transition-all duration-200 hover:!bg-[#0c331c] hover:!text-white"
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Language Toggle */}
          <LanguageSwitcher />
          {/* Mobile Dropdown - RIGHT SIDE */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content  z-[100] mt-3 w-56 bg-white p-2 shadow font-eb-garamond  rounded-md gap-2"
            >
              {navLinks.map((link) =>
                link.subLinks ? (
                  <li key={link.title}>
                    <details className="group">
                      <summary className="px-5 py-1 rounded-4xl cursor-pointer transition-all duration-200 hover:!bg-[#0c331c] hover:!text-white">
                        {link.title}
                      </summary>
                      <ul className="p-2 bg-white shadow-lg rounded-box mt-1 rounded-md">
                        {link.subLinks.map((sub) => (
                          <li key={sub.title}>
                            <NavLink
                              to={sub.path}
                              className={({ isActive }) =>
                                isActive
                                  ? "block bg-primary text-white rounded-3xl px-4 py-1"
                                  : "block px-4 py-1 rounded-3xl transition-all duration-200 hover:!bg-[#0c331c] hover:!text-white"
                              }
                            >
                              {sub.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={link.title}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "block bg-primary text-white rounded-4xl px-5 py-1"
                          : "block px-5 py-1 rounded-4xl transition-all duration-200 hover:!bg-[#0c331c] hover:!text-white"
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
