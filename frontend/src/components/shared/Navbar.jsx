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
    <div className=" shadow-sm  fixed w-full ">
      <div className="mx-auto lg:container ">
        <nav className="navbar bg-base-100 px-6 lg:px-12 ">
          <div className="flex-1">
            <NavLink className="text-xl  playfair-display">
              ÉTIENNE ÉTHAIRE
            </NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-1 text-base font-normal cormorant-garamond ">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? " font-bold border-b rounded-none "
                        : "hover:border-b rounded-none hover:bg-transparent "
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
