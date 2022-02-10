import LOGO from '../../assets/logo.png'
import { BsDiscord } from 'react-icons/bs'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import './style.css'

function Footer() {
    return (
        <div className='footer_container'>
            <div className='last_section'>
                <div className="footer_icons_container">
                    <span onClick={() => window.location.href = 'https://twitter.com/lordsociety_nft'}><FaTwitter /></span>
                    <span onClick={() => window.location.href = 'https://www.instagram.com/lordsocietynft/'}><FaInstagram /></span>
                </div>
                <img src={LOGO} alt="footer logo" />
                <p>- - -</p>
                <p>Copyright © 2022 | Majestic Bears All rights reserved.</p>

            </div>
        </div>
    )
}

export default Footer;