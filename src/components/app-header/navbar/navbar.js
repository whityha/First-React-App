import React from "react";

const Navbar = () => {
    return (    
        <nav className='header_menu offset-6 col-4'>
            <ul className='header_menu_list d-flex justify-content-between'>
                <li className='header_menu_item'><a href='#'>Motocycles</a></li>
                <li className='header_menu_item'><a href='#'>History</a></li>
                <li className='header_menu_item'><a href='#'>Rides</a></li>
                <li className='header_menu_item'><a href='#'>Out world</a></li>
                <li className='header_menu_item'><a href='#'>Gallery</a></li>
            </ul>
        </nav>    
    )
}
export default Navbar;