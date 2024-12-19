import React from 'react';

const Navbar = (props) => {
    return (
        // <div>
            <nav className="navbar navbar-expand-lg sticky-top bg-light">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="collapse navbar-collapse justify-content-start">
                        <a className="navbar-brand mx-5" href="#">
                            <img
                                src={props.image}
                                alt="Logo"
                                style={{ height: '30px', width: 'auto' }}
                            />
                        </a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" href="#">
                                    realme smartphone
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" href="#">
                                    narzo smartphone
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" href="#">
                                    Audio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" href="#">
                                    Accessories
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Brand
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Support
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        // </div>
    );
};

export default Navbar;
