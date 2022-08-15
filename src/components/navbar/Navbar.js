import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-light extra-shadow fixed-top px-4 py-3">
      <div className="container-fluid">
        <a className="navbar-brand price-tag" href="#">
          MobiLet
        </a>
        <button className="btn btn-secondary btn-sm" disabled>
          Cart: 0 items
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
