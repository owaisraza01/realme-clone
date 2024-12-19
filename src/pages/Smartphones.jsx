import React from 'react';
import ProductCard from '../components/ProductCard';
import c75 from '../assets/smartphonesimage/c75.webp';
import r135g from '../assets/smartphonesimage/135g.webp'
import gt6 from '../assets/smartphonesimage/gt6.webp'
import note60 from '../assets/smartphonesimage/note60.webp'
import c61 from '../assets/smartphonesimage/c61.webp'
import c65 from '../assets/smartphonesimage/c65.webp'
import r12 from '../assets/smartphonesimage/r12.webp'
import r125g from '../assets/smartphonesimage/r125g.webp'
import c63 from '../assets/smartphonesimage/c63.webp'
import note50 from '../assets/smartphonesimage/note50.webp'
import c67 from '../assets/smartphonesimage/c67.webp'
import c53 from '../assets/smartphonesimage/c53.webp'


const Smartphones = () => {
    return (
        <div className="container">
        
            <div className="row mt-5 justify-content-center mx-5">
            <h1 className='fw-bold mb-5'>SmartPhones</h1>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme C75"
                        description="Dhulai Horai Hai"
                        image={c75}
                    />
                </div>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme 13+ 5g"
                        description="Speed to Victory"
                        image={r135g}
                    />
                </div>
            </div>
            <div className="row mt-5 justify-content-center mx-5">
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme GT 6"
                        description="Power meets AI"
                        image={gt6}
                    />
                </div>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme Note 60"
                        description="Champion Quality"
                        image={note60}
                    />
                </div>
            </div>
            <div className="row mt-5 justify-content-center mx-5">
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme C61"
                        description="Hard to break"
                        image={c61}
                    />
                </div>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme C65"
                        description="Unbreakable Champion"
                        image={c65}
                    />
                </div>
            </div>
            <div className="row mt-5 justify-content-center mx-5">
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme 12"
                        description="Power in Every shot"
                        image={r12}
                    />
                </div>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme 12+ 5g"
                        description="Power in Every shot"
                        image={r125g}
                    />
                </div>
            </div>
            <div className="row mt-5 justify-content-center mx-5">
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme C63"
                        description="3 min Charge, 60 min T20 Match"
                        image={c63}
                    />
                </div>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme Note 50"
                        description="Long-lasting Value Beast"
                        image={note50}
                    />
                </div>
            </div>
            <div className="row mt-5 justify-content-center mx-5">
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme C67"
                        description="108MP 3x In-sensor Zoom Camera, Snapdragon 685"
                        image={c67}
                    />
                </div>
                <div className="col-md-6">
                    <ProductCard
                        label="NEW"
                        title="realme C53"
                        description="Champion Gold, 33W Champion Charge"
                        image={c53}
                    />
                </div>
            </div>
        </div>
    );
};

export default Smartphones;
