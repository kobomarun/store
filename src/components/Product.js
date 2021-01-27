import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    return (
        <div className="row">
            {props.products.map(item => {
                return (

                    <div className="col-md-3 product-box" key={item.product_id}>
                        <div className="prod-img">
                            <Link to={`/details/${item.product_id}`}>
                                <img
                                    src={`product_images/${item.thumbnail}`}
                                    alt=""
                                    className=""
                                />
                            </Link>
                        </div>
                        <p className="prod-name">
                            {item.name}
                        </p>
                        <p className="prod-price">
                            £{item.price}
                        </p>
                        <button className="btn btn-primary buttons">Buy Now</button>
                    </div>

                )
            })}

        </div>
    )

}


export default Product;


