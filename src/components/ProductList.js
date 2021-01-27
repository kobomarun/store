import React from 'react'

import Product from './Product';
import { ProductConsumer } from '../store';


const ProductList = () => {
    return (
        <div className="col-md-10">
            <ProductConsumer>
                {value => {
                    return (<Product products={value.products} />)
                }}
            </ProductConsumer>
        </div>

    )

}

export default ProductList;
