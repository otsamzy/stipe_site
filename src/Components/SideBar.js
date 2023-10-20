import React from "react";
import sublinks from "./Data";
import { useGlobal } from "./Context";
import { FaWindowClose } from "react-icons/fa";

const SideBar = () => {
  const { closeSideBar, isSidbarOoen } = useGlobal();

  return (
    <section
      className={`${
        isSidbarOoen
          ? "side_bar_component show show_side_bar"
          : "side_bar_component"
      }`}
    >
      <div className="side_container">
        <FaWindowClose className="close_btn" onClick={closeSideBar} />
        {sublinks.map((items, itemsIndex) => {
          const { page, links } = items;
          return (
            <article className="links_component" key={itemsIndex}>
              <h3 className="link_title">{page}</h3>
              <ul className="side_bar_links_container">
                {links.map((item, itemIndex) => {
                  const { label, icon, url } = item;
                  return (
                    <li className="side_bar_link" key={itemIndex}>
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
