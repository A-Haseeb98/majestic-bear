import PIC1 from '../../assets/003.png'
import { useHistory } from 'react-router-dom';
import './style.css'

function Artist() {
    const history = useHistory()
    return (
        <div id='artist' className="artist_container">
            <div className='main_heading_wrapper'>
                <h1>The Artist
                    <h2>The Artist</h2>
                </h1>
            </div>
            <div className='about_sub_container artist_sub'>

                <div className='content_container'>
                    <h1 className='theme_heading'> PETER DENNELIS</h1>
                    <p className='theme_text'>Peter worked for famous studios such as Disney, Warner Bros, Universal and other well-known studios. If you’ve seen Jurassic Word (2018), Suicide Squad (2016)
                    </p>
                    <button onClick={() => history.push('/team')} className='theme_button'>Read More</button>
                </div>
                <div className='img_contaier'>
                    <img alt='bear' loading='lazy' src={PIC1} />
                </div>
            </div>
            <div className='line_movement'>

            </div>
        </div>
    )
}

export default Artist;