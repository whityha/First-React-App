/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Navbar = (props) => {

    return (    
        <nav className='header_menu offset-6 col-4'>
            <ul className='header_menu_list d-flex justify-content-between'>
                <li onClick={() => {props.changeActive(1)}} className='header_menu_item'><a href='#'>Motocycles</a></li>
                <li onClick={() => {props.changeActive(2)}} className='header_menu_item'><a href='#'>History</a></li>
                <li onClick={() => {props.changeActive(3)}} className='header_menu_item'><a href='#'>Rides</a></li>
                <li onClick={() => {props.changeActive(4)}} className='header_menu_item'><a href='#'>Out world</a></li>
                <li onClick={() => {props.changeActive(5)}} className='header_menu_item'><a href='#'>Gallery</a></li>
            </ul>
        </nav>    
    )
}
export default Navbar;