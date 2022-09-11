

import logo from '../../resources/img/LogoMain.png';

import telegram from '../../resources/img/Vector-1.png'
import vk from '../../resources/img/Vector-2.png'
import inst from '../../resources/img/Vector.png'


import './footer.scss'


const AppFooter = () => {
    return(
        <footer>
            <div className='wrapper'>
                <img className='logo' src={logo} alt="mainLogo"></img>
                <a className='support' alt='supportLink' href="#">support</a>
            <div className='socials'>
                <a className='VK' alt="vk" href='#'>
                    <img alt='VK' src={vk}></img>
                </a>
                <a className='inst' alt="inst" href='#'>
                    <img alt='inst' src={inst}></img>
                </a>
                <a className='telegram' alt="telegram" href='#'>
                    <img alt='telegram' src={telegram}></img>
                </a>
            </div>
            <p className='license'>ⓒ MyOwnRate </p>
            </div>

            
        </footer>
    )
}

export default AppFooter;