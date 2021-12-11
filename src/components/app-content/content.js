import React, { Component } from 'react';
import ContentMain from './app-containt-main/app-content-main';
import Gallery from "../app-content/app-gallery/gallery"


export default class Content extends Component {
   
    render () {        
        const {activeItems} = this.props;
        return (
            <>
        <ContentMain active={activeItems[0]}/>
        <Gallery active={activeItems[4]} />
            </>
        )
    }
    
};
