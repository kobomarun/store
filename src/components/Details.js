import React from 'react'

import { ProductConsumer } from '../store';
import ProductDetails from './ProductDetails';


const Details = (props) => {
    return (
        <div className="col-md-12">
            <ProductConsumer>
                {value => {

                    return (<ProductDetails details={value} id={props.match.params.id} />)


                }}
            </ProductConsumer>
        </div>

    )

}

export default Details;
