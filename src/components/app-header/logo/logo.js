/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Logo = (props) => {
    return (
    <div className='header_logo col-2 d-flex flex-column'>
        <img onClick={()=>{props.changeActive(0)}} src='./images/Logo.svg' className='header_logo_img'/>
        <span className='header_logo_text'>History of the legend</span>
    </div>
    )
}
export default Logo;