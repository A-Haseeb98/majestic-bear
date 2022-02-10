import Peter from '../../assets/Peter.png'
import Andrew from '../../assets/Andrew.png'
import Renee from '../../assets/Renee.png'
import Daniel from '../../assets/Daniel.png'
import Wendy from '../../assets/Wendy.png'
import Dylan from '../../assets/Dylan.png'
import Julia from '../../assets/Julia.png'


import './style.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, { Pagination, Autoplay } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);

function TeamSection() {
    return (
        <div id='team'>
            <div className='main_heading_wrapper'>
                <h1>OUR TEAM<h2>MEET THE TEAM</h2></h1>
                
            </div>
            <div className='carousal_contaier'>
                <Swiper
                    pagination={{ "clickable": true }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                          }
                      }}
                    loop={true}
                    // slidesPerView={3}
                    autoplay={{
                        "delay": 5000,
                        "disableOnInteraction": false
                    }} className="mySwiper">
                    <SwiperSlide className='slide_'><img src={Peter} /></SwiperSlide>
                    <SwiperSlide className='slide_'><img src={Andrew} /></SwiperSlide>
                    <SwiperSlide className='slide_'><img src={Daniel} /></SwiperSlide>
                    <SwiperSlide className='slide_'><img src={Julia} /></SwiperSlide>
                    <SwiperSlide className='slide_'><img src={Renee} /></SwiperSlide>
                    <SwiperSlide className='slide_'><img src={Wendy} /></SwiperSlide>
                    <SwiperSlide className='slide_'><img src={Dylan} /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default TeamSection;