import React from "react";
import phone from "./Images/phone.svg";
import { useGlobal } from "./Context";

const Hero = () => {
  const { closeMenuFun } = useGlobal();
  return (
    <section className="section_hero" onMouseOver={closeMenuFun}>
      <article className="hero_center width_control">
        <div className="hero_left_container">
          <h1 className="page_hero_title">
            payments infrastructure for the internet
          </h1>
          <p className="hero_page_details">
            millions of cpmpanies of all sizes-from startup to fortune 500s- use
            stripe software and APIs to accept payment, send payouts and manage
            thier businesses online
          </p>
          <button className="start_up_btn">Start now</button>
        </div>
        <div className="hero_image">
          <img src={phone} />
        </div>
      </article>
    </section>
  );
};

export default Hero;
