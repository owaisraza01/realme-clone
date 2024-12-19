import React from "react";
import ProductCard from "../components/ProductCard";
import t110 from '../assets/Accessories/T110.webp'
import budsq from '../assets/Accessories/budsq.webp'

const Accessories = () => {
    return (
        <div className="container">

            <div className="row mt-5 justify-content-center mx-5">
                <h1 className='fw-bold mb-5'>Accessories</h1>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme Buds T110"
                        description="Listen in Full Color"
                        image={t110}
                    />
                </div>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme Buds Q"
                        description="Music Never Ends"
                        image={budsq}
                    />
                </div>
            </div>
        </div>
    );
};

export default Accessories;
