import React, { useEffect, useRef } from "react";
import { useGlobal } from "./Context";
const Submenu = () => {
  const {
    closeMenuFun,
    isMenuOpen,
    location,
    page: { page, links },
  } = useGlobal();

  const container = useRef(null);
  useEffect(() => {
    const containerPosition = container.current;
    const { center, bottom } = location;
    containerPosition.style.left = `${center}px`;
    containerPosition.style.top = `${bottom}px`;
  }, [location]);
  return (
    <section
      ref={container}
      className={`${
        isMenuOpen ? "sub_menu_component show_sublink" : "sub_menu_component"
      }`}
    >
      <h3>{page}</h3>
      <ul className="submenu_links_con">
        {links.map((item) => {
          const { url, label, icon } = item;
          return (
            <li>
              <a href={url}>
                {icon}
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Submenu;
