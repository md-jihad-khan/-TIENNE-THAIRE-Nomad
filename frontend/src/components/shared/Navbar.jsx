import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation("global");
  const location = useLocation();

  const handleLinkClick = () => {
    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
      elem.blur();
    }
  };

  const navLinks = [
    { title: t("nav.home"), path: "/" },
    { title: t("nav.biography"), path: "/biography" },

    {
      title: t("nav.books"),
      path: "/books",
      subLinks: [
        {
          title: t("nav.books_sub.roman"),
          path: "/books/novel",
          children: [
            { title: "La Langoureuse", path: "/books/novel/la-langoureuse" },
            { title: "Alissia Lone", path: "/books/novel/alissia-lone" },
            { title: "Funérarium", path: "/books/novel/funerarium" },
          ],
        },
        {
          title: t("nav.books_sub.docuFiction"),
          path: "/books/docu-fiction",
          children: [{ title: "Casting", path: "/books/docu-fiction/casting" }],
        },
        {
          title: t("nav.books_sub.documentary"),
          path: "/books/documentary",
          children: [
            {
              title: "Diva Siouxsie",
              path: "/books/documentary/diva-siouxsie",
            },
            {
              title: "Patti Smith, la fille de Rimbaud",
              path: "/books/documentary/patti-smith",
            },
            {
              title: "La Tribu des Rouches",
              path: "/books/documentary/la-tribu",
            },
          ],
        },
      ],
    },

    {
      title: t("nav.photography"),
      path: "/photography",
      subLinks: [
        {
          title: t("nav.photography_sub.introduction"),
          path: "/photography/introduction",
        },
        { title: t("nav.photography_sub.travel"), path: "/photography/travel" },
        {
          title: t("nav.photography_sub.eroticism"),
          path: "/photography/eroticism",
        },
      ],
    },

    { title: t("nav.nbs"), path: "/nomadblacksheep" },
  ];

  return (
    <div className="fixed w-full z-[1001] bg-white shadow-sm">
      <motion.div
        className="navbar px-3 lg:px-12 container mx-auto flex justify-between items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className="font-semibold text-xl md:text-2xl tracking-widest text-primary font-jomhuria"
        >
          ÉTIENNE ÉTHAIRE
        </NavLink>

        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex menu menu-horizontal p-1 font-eb-garamond border-primary border-[1px] rounded-[40px] gap-2">
            {navLinks.map((link) => {
              const isSubActive =
                link.subLinks &&
                link.subLinks.some((sub) =>
                  location.pathname.startsWith(sub.path),
                );

              return link.subLinks ? (
                <li key={link.title} className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className={`px-5 py-1 rounded-4xl cursor-pointer transition-all duration-200
                      ${isSubActive
                        ? "bg-primary text-white"
                        : "hover:!bg-[#0c331c] hover:!text-white"
                      }`}
                  >
                    {link.title}
                  </div>

                  <ul className="dropdown-content menu bg-white gap-1 flex flex-col shadow-lg w-auto rounded-box mt-1 z-[1000]">
                    {link.subLinks.map((sub) => (
                      <li key={sub.title}>
                        {sub.children ? (
                          <details className="group" open>
                            <summary className="px-4 py-1 rounded-3xl cursor-pointer transition-all duration-200 hover:!bg-[#0c331c] hover:!text-white">
                              {sub.title}
                            </summary>

                            <ul className="ml-4 mt-1 flex flex-col gap-1 p-0 border-l border-gray-300">
                              {sub.children.map((child) => (
                                <li key={child.title}>
                                  <NavLink
                                    to={child.path}
                                    onClick={handleLinkClick}
                                    className={({ isActive }) =>
                                      isActive
                                        ? "bg-primary text-white rounded-md px-2 py-1 w-full"
                                        : "w-full px-2 rounded-md py-1 transition-all duration-200 hover:!bg-[#0c331c] hover:!text-white"
                                    }
                                  >
                                    {child.title}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </details>
                        ) : (
                          <NavLink
                            to={sub.path}
                            onClick={handleLinkClick}
                            className={({ isActive }) =>
                              isActive
                                ? "bg-primary text-white rounded-3xl px-4 py-1"
                                : "px-4 py-1 rounded-3xl transition-all duration-200 hover:!bg-[#0c331c] hover:!text-white"
                            }
                          >
                            {sub.title}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.title}>
                  <NavLink
                    to={link.path}
                    onClick={handleLinkClick}
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

          <LanguageSwitcher />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
