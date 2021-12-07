import React from 'react';
import Bg from '../app-bg/app-bg';
import Header from '../app-header/header';
import Content from '../app-content/app-containt-main/app-content-main';
import Footer from '../app-footer/footer';

const App = () => {
  return (        
    <div className='content d-flex flex-column justify-content-between'>
      <Header/>    
      <Content/>
      <Footer/>
      <Bg/>
    </div>    
  )
}

export default App;