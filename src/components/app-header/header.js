import Logo from './logo/logo';
import Navbar from './navbar/navbar';

const Header = () => {
    return (        
        <div className='header'>
            <div className='container'>
                <div className='row'>              
                <Logo/>
                <Navbar/>
                </div>
            </div>
        </div> 
    )
}

export default Header;