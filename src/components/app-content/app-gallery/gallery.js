import React, {Component} from "react";

class Gallery extends Component {

    render() {
        const classLists = 'container';
        let {active} = this.props
        if(active) {
            return (
            <div className={classLists}>)))))</div>
            )
        }
        
        return <></>
    }
}

export default Gallery;