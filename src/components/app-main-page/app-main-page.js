
import Logo from './logo/logo';
import Navbar from './navbar/navbar';
import Title from './title/title';


const AppMainPage = () => {
    return (
        <>             
        <div className='bgMainPage'>  
            <div className='mainPage'>
                <div className ='mainPage_header'>
                    <Logo/>
                    <Navbar/>
                </div>
                <div classname='mainpage_Title'>
                    <Title/>
                </div>
                <div className='mainPage_footer'>
                    
                </div>
            </div>            
        </div>      
        </>
    )
}

export default AppMainPage;