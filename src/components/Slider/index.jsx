import { Container } from "./styles"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from "swiper/element/bundle"
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Card from "../Card"

register()

function Slider({ info, title }) {
  return (
    <>
    <Container>
      <h2>{title}</h2>

      <Swiper
       grabCursor 
       slidesPerView={7}
       spaceBetween={5}
       loop={true}
       navigation={true}
       modules={[ Navigation]}
       className="mySwiper"
       >
        
        {info.map((item, index) => (

          <SwiperSlide key={index} >

            <Card item={item}/>
            
          </SwiperSlide>
        ))}
       
      </Swiper>
    </Container>
    </>
  )
}

export default Slider

Slider.propTypes = {
  info: PropTypes.array,
  title: PropTypes.string,
}
