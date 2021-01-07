import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';

export default class ProductList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="py-5 px-5">
                    <Title name="our" title="products"/>
                    <div className="row">
                        <ProductConsumer>
                            {value =>{
                                
                                return value.products.map(product =>{
                                    return <Product 
                                    key={product.id}
                                    product={product} />;
                                });
                                
                                console.log("****");
                                console.log(value);
                                console.log(value.products);

                                

                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}