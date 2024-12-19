import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5 className="fw-bold">Recommended</h5>
                        <ul className="list-unstyled ">
                            <li>realme C75</li>
                            <li>realme 13+ 5G</li>
                            <li>realme Note 60</li>
                            <li>realme C61</li>
                            <li>realme C65</li>
                            <li>realme 12</li>
                            <li>realme 12+ 5G</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold">Support</h5>
                        <ul className="list-unstyled">
                            <li>FAQ</li>
                            <li>Troubleshooting</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold">About realme</h5>
                        <ul className="list-unstyled">
                            <li>Our Brand</li>
                            <li>Newsroom</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="fw-bold">Contact realme</h5>
                        <ul className="list-unstyled">
                            <li>Whatsapp</li>
                            <li>service.pk@realme.com</li>
                        </ul>
                        <p className="mt-2">
                            <strong>04238048018</strong>
                            <br />
                            09:30 - 18:00, MON - SAT
                            <br />
                            Exclude Holidays
                        </p>
                        <div className="d-flex gap-2">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-instagram"></i>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-between align-items-center">
                    <span>Pakistan ( English / PKR )</span>
                    <span>© 2019-2024 realme. All Rights Reserved.</span>
                    <div>
                        <a href="#" className="text-light text-decoration-none mx-2">User Agreement</a>
                        <a href="#" className="text-light text-decoration-none mx-2">Privacy Policy</a>
                        <a href="#" className="text-light text-decoration-none mx-2">Terms of Sales</a>
                        <a href="#" className="text-light text-decoration-none mx-2">Warranty Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
