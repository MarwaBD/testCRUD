import React from "react";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg  "
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "#316c75",
      }}
    >
      <a
        className="navbar-brand"
        style={{
          color: "white",
        }}
      >
        Crud produit
      </a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
