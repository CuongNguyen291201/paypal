import React, { Component } from 'react'
import Product from './Product/Product';
import Title from './Title';
import { ProductConsumer } from '../../context';

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />                        

                        <div className="row">
                            <ProductConsumer>
                                {value => (
                                    // console.log(value)
                                    value.products.map((product) => (
                                        <Product key={product.id} product={product} 
                                            
                                        />
                                    ))
                                    
                                )}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;