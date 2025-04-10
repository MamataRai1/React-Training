import style from "./heroSec.module.css";
import React from 'react'
const isAdmin =true;
const canEdit = false;
const HeroSection = () => {

  return (
    <div>
      <p className={style.heroSecHeading}> 
        {isAdmin ? "Welcome Admin": "Welcome User"}
        <div>
             {isAdmin ? (canEdit ? "edit": "View"): "you not an admin"}
        </div>{" "}
      </p>
      <span className={style.heroSecHeading}> this is our super react app</span>
    </div>
  );
}

export default HeroSection
