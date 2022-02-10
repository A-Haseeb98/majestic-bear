import PIC1 from '../../assets/002.png'

import './style.css'

function AboutUs() {
    return (
        <div id='about' className="about_container">
            <div className='main_heading_wrapper'>
                <h1>ABOUT US
                    <h2>ABOUT US</h2>
                </h1>
            </div>
            <div className='about_sub_container'>
                <div className='img_contaier'>
                    <img alt='bear' loading='lazy' src={PIC1} />
                </div>
                <div className='content_container'>
                    <h1 className='theme_heading'> WHO WE ARE ?</h1>
                    <p className='theme_text'>Each Bear is unique, based on hundreds of well-designed elements that characterize a <strong> bullish crypto enthusiast</strong>.
                        Entering<strong> The Majestic Bears Club </strong>means joining a family full of people who believe in the future of Cryptocurrencies
                        and Blockchain technology.
                    </p>
                    <button onClick={() => window.open('https://discord.com/invite/majesticbears','_blank')} className='theme_button'>JOIN US</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;