import React from 'react';
import Bg from '../app-bg/app-bg';
import Header from '../app-header/header';
import Content from '../app-content/content';
import Footer from '../app-footer/footer';
import { Component } from 'react';

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: [true, false, false, false, false]
    }

    this.changeActiveContent = this.changeActiveContent.bind(this)
  }

  changeActiveContent(i) {
    let arr = [false, false, false, false, false];
    arr[i] = true
    this.setState({
      active: arr  
    })
  }

  render() {
      return (        
        <div className='content d-flex flex-column justify-content-between'>
          <Header 
          changeActive = {this.changeActiveContent}
          />    
          <Content 
          activeItems = {this.state.active}
          />       
          <Footer/>
          <Bg/>
        </div>    
      )  
  }
}