import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart } = this.props.product;

        return (
            <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container "

                    onClick = {()=> console.log("clicked image")}>
                        <Link to="/details">
                            <img src={img} alt="product" 
                            className="card-img-top " />
                        </Link>
                        <button className="cart-btn" 
                            disabled={inCart?true:false}
                            onClick={()=>{console.log('added to cart');}}
                            >
                            {inCart ? 
                                (<p className="text-capitalize mb-0">in cart</p>) 
                                : (
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule ="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                )}
                        </button>
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                        </div>
                        

                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
 .card{
     border-color: transparent;
     transition: all 1s linear;
 }
 .card-footer{
     background: transparent;
     border-top:transparent;
     transition: all 1s linear;
 }
  .card-img-top{
    transform:scale(0.6);
}
 &:hover{
     .card{
         border:0.04rem solid rgba(0,0,0,0.2);
         box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
     }
     .card-footer{
         background: #DCDCDC;
     }
     img-container{
         position: relative;
         //overflow: hidden;
     }
     .card-img-top{
        transition: all 1s linear;
     }
     .img-container:hover .card-img-top{
         transform:scale(1.02);
     }
     .cart-btn{
         position:absolute;
         bottom:20;
         right:0;
         padding: 0.2rem 0.4rem;
         background: var(--lightblue);
         border: none;
         color: var(--mainWhite);
         font-size: 1.4rem;
         border-radius: 0.5rem 0 0 0;
         transform:translate(100%,100%);
         transition: all 1s linear;
     }
     .img-container:hover .cart-btn{
         transform: translate(0,0);
     }
 }
 



`;
