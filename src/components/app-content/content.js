import React, { Component } from 'react';
import ContentMain from './app-containt-main/app-content-main';
import Gallery from "../app-content/app-gallery/gallery";

export default class Content extends Component {
   
    render () {        
        const {activeContent} = this.props;
        return (
            <>
        <ContentMain active={activeContent[0]}/>
        {/* <History atcive={activeItems[1]/>
        <Motocycles active={activeItems[2]}/>
        <Rides active={activeItems[3]}/>
        <OutWorld active={activeItems[4]}/> */}
        <Gallery active={activeContent[5]} />
            </>
        )
    }
    
};
