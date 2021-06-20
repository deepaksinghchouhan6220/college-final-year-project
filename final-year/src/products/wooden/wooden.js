import React from 'react';
import './wooden.css';
// import jar from "jar.jpg"
// import jar from "../wooden/jar.jpg"
// import data from "../../new_product/productdata.js"
import {BiSearchAlt,BiHeart} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { WoodenCraft } from '../../tabSection/commondata';



export default function wooden() {
    return (
       
<>
<div className="container mycontainer">
<div className="row  ">
{WoodenCraft.map((Wooden)=>{
                  return(
                    
                  
        <div className="col-md-4">
           <div class="box-self ">
            <img src={Wooden.imgsrc} class="img-size" />

           <div className="product-name"> <center><h4>{Wooden.name}</h4></center> </div>
            <div className="product-price"><h3><b>₹{Wooden.price}</b></h3></div>
           <div className="product-cart"> <button className="btn btn-outline-danger product-icons" data-bs-toggle="tooltip" data-bs-placement="top" title="add to wishlist"><BiHeart className="product-icons"/></button>
                                  <button className="btn btn-outline-danger product-icons"data-bs-toggle="tooltip" id="add-cart" data-bs-placement="top" title="add to cart"><FaShoppingCart className="product-icons"/></button>
           </div> </div>
        </div>)
              })}</div></div>
    
{/* <div className="container mycontainer">
    <div className="row ">
        <div className="col">
           <div class="box-self ">
            <img src={jar} class="img-size" />

            <h3>computer higher{data[0].name}</h3>
            <h3><b>₹1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h4>computer higher processor and ram</h4>
            <h3><b>₹1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>₹1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>
    </div>


    <div className="row row-self">
        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>

        <div className="col">
           <div class="box-self">
            <img src={jar} class="img-size" />

            <h3>computer higher processor and ram</h3>
            <h3><b>$1200</b></h3>
            </div>
        </div>
    </div>
</div>
 */}



            
 </>
    )
}





