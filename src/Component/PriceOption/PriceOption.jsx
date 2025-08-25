import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { planName, pricePerMonth, features } = option;
    return (
        <div className='bg-blue-300 rounded-2xl p-6 flex flex-col'>
            <h2>
                <span className="text-7xl font-extrabold">{pricePerMonth}</span>
                <span className="text-7xl">/mon</span>
            </h2>
            <h4 className="text-5xl ">{planName}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className=" mt-12 bg-green-600 w-full py-2 font-bold text-white hover:bg-amber-700">Buy Now</button>
        </div>
    );
};

export default PriceOption;