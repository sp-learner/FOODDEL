import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat porro nihil adipisci in perspiciatis quia rerum earum quisquam deserunt quam ut, voluptatem asperiores deleniti, maxime ipsa eaque pariatur reprehenderit.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setcategory(perv=>perv===item.menu_name?"ALL":item.menu_name)} key={index}  className="explore-menu-list-item">
                    <img className={category==item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}

      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
