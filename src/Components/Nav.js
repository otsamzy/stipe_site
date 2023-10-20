import React from "react";
import logo from "./Images/logo.svg";
import { FaAlignJustify } from "react-icons/fa6";
import { useGlobal } from "./Context";

const Nav = () => {
  const { openSideBar, openMenuFun, closeMenuFun } = useGlobal();

  const handleSUbMenu = (e) => {
    const page = e.target.textContent;
    const position = e.target.getBoundingClientRect();
    const center = (position.left + position.right) / 2;
    const bottom = position.bottom - 3;

    openMenuFun(page, { center, bottom });
  };

  const closeMen = (e) => {
    if (!e.target.classList.contains("nav")) {
      closeMenuFun();
    }
  };
  return (
    <header className="header_container" onMouseOver={closeMen}>
      <section className="width_control header">
        <div className="header_center">
          <img src={logo} alt="logo" />
          <span className="icon_container" onClick={openSideBar}>
            <FaAlignJustify />
          </span>
        </div>
        <nav className="nav_links_continer">
          <ul className="nav_flex">
            <li onMouseOver={handleSUbMenu} className="nav">
              products
            </li>
            <li onMouseOver={handleSUbMenu} className="nav">
              developers
            </li>
            <li onMouseOver={handleSUbMenu} className="nav">
              company
            </li>
          </ul>
        </nav>

        <button className="sign_btn">sign in</button>
      </section>
    </header>
  );
};

export default Nav;
