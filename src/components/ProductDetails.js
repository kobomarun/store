import React from 'react'
import { Link } from 'react-router-dom'

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newCart: JSON.parse(localStorage.getItem('cart')) || [],
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

    componentDidUpdate() {
        localStorage.setItem("cart", JSON.stringify(this.state.newCart))
    }

    handleCart(product) {
        //const inCart = this.state.products.find(item => item.product_id == id);

        this.setState({
            newCart: this.state.newCart.concat(product)
        })
        alert(`${product.name} has been added to your cart`)
    }

    render() {
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
                                    src={`/product_images/${product.thumbnail}`}
                                    alt={product.name}
                                    width="350"
                                />
                                <div className="clear mt-5">
                                    <Link to="/" className="buttons btn btn-primary" >Continue Shopping</Link>
                                </div>
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
                                    <button className="buttons btn btn-primary" onClick={() => this.handleCart(product)}>Add to cart</button>
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
