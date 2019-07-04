import React from 'react';


const ProductContext = React.createContext();

class ProductProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            name: 'dhhdhdhhd'
        }

        this.getAllAproducts = this.getAllAproducts.bind(this);
    }

    componentDidMount() {
        fetch('https://backendapi.turing.com/products')
            .then(response => response.json())
            .then(response => this.getAllAproducts(response))
            .catch(error => console.log(error))
    }

    getAllAproducts(result) {
        this.setState({
            products: result.rows
        })
    }
    render() {
        console.log('mee', this.state.products)
        return (
            <ProductContext.Provider value={this.state.products}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };