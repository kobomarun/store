import React from 'react'

const NavBar = () => {
    return (
        <div className="">
            <div className="container-fluid">
                <div className="mainNav">
                    <div className="container ">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand logo" href="/">Shopmate</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto menu">
                                    <li className="nav-item ">
                                        <a className="nav-link" href="#">Women <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Men</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Kids</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Shoes</a>
                                    </li>
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

