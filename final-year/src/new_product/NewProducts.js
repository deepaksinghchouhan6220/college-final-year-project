import React from 'react'
import Slider from "react-slick";
import   "./NewProduct.css";
import data from "./productdata"
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";

function NewProducts()
{
    
    
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          pauseOnHover: true,
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
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div className="container newproduct_container">
            <div className="mb-5 new_product_headline"> New Products </div>
            <  Slider {...settings}>
              {data.map((data)=>{
                  return<div className='row'>
                           <div class="col">
                              <div className="box">
                                <div className="img_container">
                                  <img src ={data.imgsrc} alt="" className="img_src"/>
                                </div>
                                <div className="mt-2 text-center">
                                  <div className="fontStyle uppercase  my-1">{data.name}</div>
                                  <h5 class="product-price my-2">₹{data.price} <del class="product-old-price">₹990.00</del></h5>
                                </div>
                                <div className="d-flex justify-content-around mx-3 my-3">
                                  <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist"><BiHeart className="product-icons"/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" data-bs-placement="top" title="add to cart"><FaShoppingCart className="product-icons"/></button>
                                </div>
                              </div>
                           </div>
                        </div>
              })}
            </Slider>
          </div>
        ); 
}

export default NewProducts;