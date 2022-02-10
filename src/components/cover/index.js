import BEAR from '../../assets/cover.png'
import './style/index.css'
import { FaAngleDoubleDown } from 'react-icons/fa'


function Cover() {

    return (
        <div className="cover_container">
            <div className='cover_content'>
                <div className='image_wrapper'>
                    <img src={BEAR} alt="men" />
                </div>
                <div className='content_'>
                    <h1 className='main_heading'>8’888 Unique Majestic Bears
                    </h1>
                    <div className='para_'>
                        <p>
                            Majestic Bears is a project composed of 8,888 NFTs crafted by talented and expert designers and developers.
                            We unified the most experienced people in the industry to deliver a remarkable, cutting-edge product.
                        </p>
                    </div>
                    <button onClick={()=> window.open('https://discord.com/invite/majesticbears','_blank')} className='theme_button'>Join Our Discord</button>
                </div>

            </div>
            <span className='arrow'>
                {/* <HashLink smooth to="#home"> */}
                <FaAngleDoubleDown />
                {/* </HashLink> */}
            </span>
        </div>
    )
}

export default Cover;