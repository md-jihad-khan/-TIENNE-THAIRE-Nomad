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
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <NavLink className="text-xl  playfair-display">ÉTIENNE ÉTHAIRE</NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 cormorant-garamond ">
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? " font-bold"
                    : "hover:underline hover:bg-transparent "
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
