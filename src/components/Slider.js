import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper'
import React  from 'react';
import './Slider.css'
export default function Slider(props){
  const {data} = props
    return(
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >  
      <SwiperSlide>
      <div className="margin250">
      <div className='container-contents padding-content-first'>
        <div className='desciption-container'>
          <div className='container-desc'>
            <div className='wrapper-title-desc'>
              <div className="title-id">{data[0].id}</div>
                <div className="title-desc">{data[0].title}</div>
                  </div>
                <div className="desc">{data[0].desc}</div>
              </div>
            </div>
        </div>
      </div>
       </SwiperSlide>
      <SwiperSlide>
      <div className="margin250">
      <div className='container-contents padding-content-first'>
        <div className='desciption-container'>
          <div className='container-desc'>
            <div className='wrapper-title-desc'>
              <div className="title-id">{data[1].id}</div>
                <div className="title-desc">{data[1].title}</div>
                  </div>
                <div className="desc">{data[1].desc}</div>
              </div>
            </div>
        </div>
      </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="margin250">
      <div className='container-contents padding-content-first'>
        <div className='desciption-container'>
          <div className='container-desc'>
            <div className='wrapper-title-desc'>
              <div className="title-id">{data[2].id}</div>
                <div className="title-desc">{data[2].title}</div>
                  </div>
                <div className="desc">{data[2].desc}</div>
              </div>
            </div>
        </div>
      </div>
      </SwiperSlide>
      </Swiper>
    )
}

