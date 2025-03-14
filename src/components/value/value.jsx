import React from "react";

import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import Accomp from "../accomp/accomp";


const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="" />
          </div>
        </div>
        {/* left side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span classNmae="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>
          <Accomp/>
        </div>
      </div>
    </section>
  );
};

export default Value;
