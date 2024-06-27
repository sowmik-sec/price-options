import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000 bg-yellow-200 px-6 ${
          open ? "top-16" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
