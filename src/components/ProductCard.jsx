import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ label, title, description, image }) => {
    return (
        <div className="card shadow-sm rounded-4" style={{maxWidth: "500px"}}>
            <div className="d-flex p-5 align-items-center justify-content-between">
                <div className="mb-5">
                    <span
                        className="badge bg-info text-uppercase mb-2"
                        style={{ fontSize: "0.8rem" }}
                    >
                        {label}
                    </span>

                    <h4 className="fw-bold mb-1">{title}</h4>

                    <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                        {description}
                    </p>
                </div>

                <img
                    src={image}
                    alt={title}
                    className="img-fluid"
                    style={{ width: "200px", height: "auto" }}
                />
            </div>
        </div>
    );
};

export default ProductCard;
