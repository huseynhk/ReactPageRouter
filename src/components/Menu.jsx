import React from 'react'
import { Data } from '../Helpers/Data'
import MenuCard from './MenuCard'
import "./menu.css";

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className="menuTitle">
        Our Products
      </h1>

      <div className="menuList">
        {Data.map((menuItem , index)=>{
          return(
          <MenuCard 
          key={index}
          name = {menuItem.name}
          image = {menuItem.image}
          content = {menuItem.content}
          price = {menuItem.price}
          />
          )
        })}
      </div>

    </div>
  )
}

export default Menu