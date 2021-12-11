import React, {Component} from "react";

export default class GalleryItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            images: ['./images/continental-banner-1_desk.jpg','./images/continental-crouch_desk.jpg','./images/gallery-01 (1).jpg','./images/gallery-01.jpg','./images/image1.jpg','./images/interceptor-attheheartofitall_desk.jpg','./images/interceptor-banner-1_desk.jpg']
        }
    }
    render() {
        const classArr = ['first','second','three','four','five','six','seven']
        const {images} = this.state

        let items = images.map((item, i) => { 
            let classNames = `image_item ${classArr[i]}`           
            return (
                <li key={i} className={classNames}><img alt='BikePicture' src={item} /></li>
            )
        })

        return (
            <>
            {items}
            </>
        )
    }
}