import React from 'react'

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            products: []
        }
        this.handleCart = this.handleCart.bind(this);
    }

    static getDerivedStateFromProps(props) {
        if (props.details.products !== '') {
            return {
                products: props.details.products
            };
        }
        return null;
    }

    handleCart(id) {
        const inCart = this.state.products.find(item => item.product_id == id);
        this.setState({
            cart: this.state.cart.concat(inCart)
        })
        localStorage.setItem('cart', this.state.cart)


    }

    render() {
        console.log('cart', this.state.cart)
        const { details, id } = this.props;
        return (
            <div className="container mt-5">
                {details.products.filter(item => {
                    return item.product_id == id
                }).map(product => {
                    return (
                        <div className="row" key={product.product_id}>
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
                                    <button className="buttons btn btn-primary" onClick={() => this.handleCart(product.product_id)}>Add to cart</button>
                                </div>
                            </div>
                        </div>


                    )
                })}
            </div>

        )
    }
}

export default ProductDetails
