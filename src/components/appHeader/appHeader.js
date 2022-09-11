

import logo from '../../resources/img/LogoMain.png';
import user from '../../resources/img/userPNG.png'
import search from '../../resources/img/search.png'

import './header.scss'


const AppHeader = () => {
    return(
        <header>
            <div className='wrapper'>
                <img className='logo' src={logo} alt="mainLogo"></img>
                <div className='button'>
                    <button>Главная</button>
                    <button>Главная</button>
                    <button>Главная</button>
                </div>
                <div className='search'>
                    <input placeholder='search'></input>
                    <img src = {search} alt = "searchButton" className='search-img'></img>
                </div>
                
                <img className='user' alt="user" src={user}></img>
            </div>
            
            
        </header>
    )
}

export default AppHeader;