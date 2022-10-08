import React from 'react';
import image from '../../images/fitness.svg';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>

            <div>
                <nav className="navbar fixed-top">
                    <div style={{ padding: "0 100px" }}>
                        <h1 className="navbar-brand  text-success" style={{ fontSize: "30px", fontWeight: "700" }}><img src={image} style={{ width: "40px", marginRight: "10px", }} alt="" />WorkOut  </h1>
                    </div>


                </nav>
            </div>

        </div>

    );
};

export default Navbar;