import React from "react";
import "./menu.css";

const MenuCard = ({ name, image, content, price }) => {
  return (
    <div className="menuCard">
        <img className="cardImg" src={image} alt="" />
        <h3>{name}</h3>
        <h6>{content}</h6>
        <p>Price : {price}</p>
    </div>
  );
};

export default MenuCard;
