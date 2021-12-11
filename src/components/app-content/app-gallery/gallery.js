import React, {Component} from "react";
import GalleryItem from '../app-gallery/galleryItem'
class Gallery extends Component { 

    render() {
        let {active} = this.props
       
        if(active) {
            return (
            <div className='gallery opacity'>
                <ul className='images_list'>
                    <GalleryItem/>
                </ul>
            </div>
            )
        }
        
        return <></>
    }
}

export default Gallery;