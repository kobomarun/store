import React from 'react'

import Product from './Product';
import Banner from './Banner';
import { ProductConsumer } from '../store';


const ProductList = () => {
    return (
        <div className="col-md-10">
            <Banner />
            <ProductConsumer>
                {value => {
                    return (<Product products={value} />)
                }}
            </ProductConsumer>
        </div>

    )

}

export default ProductList;
