import React from 'react'
import './ecommerceslider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Ecommerceslider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="ecommerce__slider">
    <div className="ecommerce__slider1">
        <h1>E-commerce Services for Different Industries</h1>
        <p>From fashion and electronics to health and automotive, we cater to multiple industrial sectors and their subsectors. Experience success like never before in:</p>
    </div>
    <div className="ecommerce__slider2">
        <Slider {...settings}>
        <div className="ecommerce__box1">
            <div className="ecommerce__box__content">
                <h1>Fashion & Apparel</h1>
            </div>
        </div>
        <div className="ecommerce__box2">
        <div className="ecommerce__box__content">
                <h1>Electronics & Gadgets</h1>
            </div>
        </div>
        <div className="ecommerce__box3">
        <div className="ecommerce__box__content">
                <h1>Home & Living</h1>
            </div>
        </div>
        <div className="ecommerce__box4">
        <div className="ecommerce__box__content">
                <h1>Health & Wellness</h1>
            </div>
        </div>
        <div className="ecommerce__box5">
        <div className="ecommerce__box__content">
                <h1>Automotive & Parts</h1>
            </div>
        </div>
        <div className="ecommerce__box6">
        <div className="ecommerce__box__content">
                <h1>Sports & Outdoors</h1>
            </div>
        </div> 
        <div className="ecommerce__box7">
        <div className="ecommerce__box__content">
                <h1>Toys & Games</h1>
            </div>
        </div>
        <div className="ecommerce__box8">
        <div className="ecommerce__box__content">
                <h1>Beauty & Personal Care</h1>
            </div>
        </div>
        <div className="ecommerce__box9">
        <div className="ecommerce__box__content">
                <h1>Books & Stationery</h1>
            </div>
        </div> 
       
        </Slider>
    </div>
</div>
  )
}

export default Ecommerceslider