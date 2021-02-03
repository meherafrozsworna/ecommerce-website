import React, { Component } from 'react'
import {storeProducts} from '../data';
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        const id = this.props.match.params.id ;
        let product = storeProducts[id-1];
        
        return (
            <div className="container py-5">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{product.title}</h1>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-5">
                        <div className="img-cls">
                            <img src={window.location.origin + '/'+ product.img} className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h1 >Model : {product.title}</h1>  
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made by : {product.company}</h4>
                        <h4 ><strong className="text-blue">Price :</strong> {product.price}</h4>
                        <h4 ><strong className="text-blue">Info :</strong> {product.info}</h4>
                        <h4><strong className="text-blue">InCart :</strong> {product.inCart}</h4>
                        <h4><strong className="text-blue">Count :</strong> {product.count}</h4>
                        <h4><strong className="text-blue">Total :</strong> {product.total}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

const ProductWrapper = styled.div`
 .img-cls{
    transform:scale(5);
    position: relative;
     transition: all 1s linear;
 }
 .img-cls:hover{
    transform:scale(1.02);
 }
 `