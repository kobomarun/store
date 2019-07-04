import React from 'react'

const TopBar = () => {
    return (
        <div className="container-fluid">
            <div className="topbar">
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <ul>
                            <li>Hi!</li>
                            <li><span className="regi_sign">Signin</span> or <span className="regi_sign">Register</span></li>
                        </ul>
                    </div>
                    <div className="col-md-8 col-xs-12">
                        <ul className="menu">
                            <li>Daily Deals</li>
                            <li>Sell</li>
                            <li>Help & Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default TopBar;
