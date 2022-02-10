import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import pic4 from '../../assets/4.png'
import pic5 from '../../assets/5.png'
import pic6 from '../../assets/6.png'
import pic7 from '../../assets/7.png'
import pic8 from '../../assets/8.png'
import './style.css'

function Gallery() {
    return (
        <div className='gallery_container'>
            <div className='row1'>
                <img src={pic1} loading='lazy' alt='bear' />
                <img src={pic2} loading='lazy' alt='bear' />
                <span className='break'></span>
                <img src={pic3} loading='lazy' alt='bear' />
                <img src={pic4} loading='lazy' alt='bear' />
            </div>
            <div className='row2'>
                <img src={pic5} loading='lazy' alt='bear' />
                <img src={pic6} loading='lazy' alt='bear' />
                <span className='break'></span>

                <img src={pic7} loading='lazy' alt='bear' />
                <img src={pic8} loading='lazy' alt='bear' />
            </div>
        </div>
    )
}

export default Gallery;