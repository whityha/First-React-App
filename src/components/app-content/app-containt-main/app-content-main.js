import React, { Component } from "react";
class ContentMain extends Component {      
   constructor(props) {
       super(props)
       this.state = {
           active: true
       }
   }
    
    render() {
        const {display} = this.props;
        let classList = 'content_main opacity';   
        let {active} = this.props;
        if(active) {        
            return (                           
                <div style={{display: display}} className={classList}>
                    <div className='container'>
                        <div className='row'>
                            <div className='offset-2 col-8 d-flex flex-column align-items-center'>
                                <h1 className='content_main_title'>HISTORY<br/>OF THE LEGEND</h1>
                                <div className='container'>
                                    <div className='row'>
                                        <span className='content_main_data d-block offset-3 col-4'>1901-2021</span>
                                        <span className='content_main_text d-block col-4'>Timeless design and dependability</span>
                                    </div>
                                </div>
                                <button className='content_main_btn' type='button'><span>Go to timeline</span></button>
                            </div>
                        </div>
                    </div>
                    <div className='content_main_img'></div>
                </div>        
            )
        }
        return (<></>)        
    }
}
export default ContentMain;