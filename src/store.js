import React from 'react';


const ProductContext = React.createContext();

class ProductProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            departments: []
        }

        this.getAllAproducts = this.getAllAproducts.bind(this);
        this.fetchProducts = this.fetchProducts.bind(this);
        this.fetchDepartments = this.fetchDepartments.bind(this);
        this.getAllDepartments = this.getAllDepartments.bind(this);
    }

    componentDidMount() {
        this.fetchProducts();
        this.fetchDepartments();
    }

    fetchProducts() {
        fetch('https://backendapi.turing.com/products')
            .then(response => response.json())
            .then(response => this.getAllAproducts(response))
            .catch(error => console.log(error))
    }

    fetchDepartments() {
        fetch('https://backendapi.turing.com/departments')
            .then(response => response.json())
            .then(response => this.getAllDepartments(response))
            //error boundary
            .catch(error => console.log(error))
    }



    getAllAproducts(result) {
        this.setState({
            products: result.rows
        })
    }

    getAllDepartments(result) {
        this.setState({
            departments: result
        })
    }
    render() {
        console.log('mee', this.state.products)
        return (
            <ProductContext.Provider value={this.state}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };