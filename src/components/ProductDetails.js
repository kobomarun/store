import React from 'react'

const ProductDetails = (props) => {
    const { details, id } = props;
    return (
        <div className="container mt-5">
            {details.products.filter(item => {
                return item.product_id == id
            }).map(product => {
                return (
                    <div className="row">
                        <div className="col-md-4 p-3">
                            <img
                                src={`product_images/${product.thumbnail}`}
                                alt=""
                                className=""
                                width="300"
                            />
                        </div>
                        <div className="col-md-8">
                            <h3 className="prod-name">{product.name}</h3>
                            <p className="prod-price">{`£${product.price}`}</p>
                            <div className="sizes">
                                <ul className="list">
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                    <li>XL</li>
                                    <li>XXL</li>
                                </ul>
                            </div>
                            <div className="mt-5  clear p_description">
                                <p>{product.description}</p>
                            </div>
                            <div className="clear mt-5">
                                <button className="buttons btn btn-primary ">Add to cart</button>
                            </div>
                        </div>
                    </div>


                )
            })}
        </div>
    )


}

export default ProductDetails
