import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../store';

const NavBar = () => {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="mainNav">
                    <div className="container ">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <Link className="navbar-brand logo" to="/">Shopmate</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto menu">
                                    <ProductConsumer>
                                        {value => {
                                            return (
                                                value.departments.map(menu => {
                                                    return (
                                                        <li className="nav-item ">
                                                            <Link className="nav-link" to="#">{menu.name} <span className="sr-only">(current)</span></Link>
                                                        </li>

                                                    )
                                                })

                                            )
                                        }}

                                    </ProductConsumer>
                                    <li className="nav-item cart-sign"><span className="fa fa-cart-plus"></span></li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

