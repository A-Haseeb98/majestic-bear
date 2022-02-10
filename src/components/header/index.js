import LOGO from '../../assets/logo.png'
import { FaDiscord, FaTwitter, FaInstagram, FaAlignJustify } from 'react-icons/fa'
import { FaRegWindowClose } from 'react-icons/fa'
import './style.css'
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';


function Header() {


    const [toggle, setToggle] = useState(false)
    const handleClick = (value) => {
        setToggle(!value)
    }

    return (
        <div id='home' className='top_navbar'>
            <div className="logo_container">
                <img src={LOGO} alt='logo' />
            </div>
            <div className='right_container'>
                <button onClick={() => window.open('https://discord.com/invite/majesticbears', '_blank')}>
                    JOIN DISCORD
                    <span> <FaDiscord /> </span>
                </button>

                <span onClick={() => window.open('https://discord.com/invite/majesticbears')} className='discord_'> <FaDiscord /> </span>
                <span onClick={() => window.open('https://twitter.com/majestic_bears', '_blank')}><FaTwitter /></span>
                <span onClick={() => window.open('https://www.instagram.com/majesticbearsnft/', '_blank')}><FaInstagram /></span>
                <span onClick={() => handleClick(toggle)} ><FaAlignJustify /></span>
            </div>
            {toggle ?
                <div className='drawer_container'>
                    <div onClick={() => handleClick(toggle)} className='close_btn'>
                        <span> <FaRegWindowClose /> </span>
                    </div>
                    <ul className="menu_section_mobile">
                        <li></li>
                        <li onClick={() => handleClick(toggle)} ><HashLink smooth to="#home">Home</HashLink></li>
                        <li onClick={() => handleClick(toggle)} ><HashLink smooth to="#about">About Us</HashLink></li>
                        <li onClick={() => handleClick(toggle)} ><HashLink smooth to="#artist">Artist</HashLink></li>
                        <li onClick={() => handleClick(toggle)} ><HashLink smooth to="#roadmap">Roadmap</HashLink></li>
                        <li onClick={() => handleClick(toggle)} ><HashLink smooth to="#team">Team</HashLink></li>
                        <li onClick={() => handleClick(toggle)} ><HashLink smooth to="#faq">FAQ</HashLink></li>
                        <li onClick={() => window.open('https://discord.com/invite/majesticbears')} >Discord</li>
                        <li onClick={() => window.open('https://www.instagram.com/majesticbearsnft/')} >Instagram </li>
                        <li onClick={() => window.open('https://twitter.com/majestic_bears')} >Twitter</li>
                    </ul>
                </div>
                : null
            }
        </div>
    )
}
export default Header;