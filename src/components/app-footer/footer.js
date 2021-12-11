import React from "react";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer_social col-2'>
                        <ul className='d-flex justify-content-between'>
                            <li className='footer_social_item bi bi-instagram'></li>
                            <li className='footer_social_item bi bi-linkedin'></li>
                            <li className='footer_social_item bi bi-facebook'></li>
                        </ul>
                    </div>
                    <div className='footer_languages offset-8 col-2'>
                        <ul className='d-flex justify-content-between'>
                            <li className='footer_social_item'>Fr</li>
                            <li className='footer_social_item'>Ru</li>
                            <li className='footer_social_item'>En</li>
                        </ul>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Footer;