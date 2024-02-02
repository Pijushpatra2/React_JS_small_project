import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import CarData from "./CarData";
import { EffectCoverflow, Pagination } from 'swiper/modules';
// import { EffectCoverflow, Pagination } from "swiper/modules";


export default function CarDetils() {
    return (
        <> 
        <div className="container">
            <Swiper 
                effect= {'coverflow'}
                grabCursor = {true}
                slidesPerView= "3"
                loop = {true}
                spaceBetween={20}
                coverflowEffect={{
                    rotate : -50,
                    stretch : 0,
                    depth : 100,
                    modifier: 1,
                    slideShadows : true,
                }}
                pagination = {true} 
                modules={[EffectCoverflow, Pagination]}
                breakpoints={{
                    576:{
                        spaceBetween:"0",
                        slidesPerView:"1"
                    },
                    786:{
                        slidesPerView:"3",
                        spaceBetween:"20"
                    }
                }}
                className='mySwiper'
            > 
                {CarData.map((car) => (
                    <SwiperSlide key={car.id}>
                        <img src={car.imagescr} alt="" />
                        <div className="detilsCont">
                            <p>{car.title}</p>
                            <p>{car.price}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div> 
        </>
    );
};
