import Logo from './logo/logo';
import Navbar from './navbar/navbar';

const Header = ({changeActive}) => {
    return (        
        <div className='header'>
            <div className='container'>
                <div className='row'>              
                <Logo changeActive={changeActive}/>
                <Navbar changeActive={changeActive}/>
                </div>
            </div>
        </div> 
    )
}

export default Header;