import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gymPricing = [
        {
            id: 1,
            planName: "Basic",
            pricePerMonth: 20,
            currency: "USD",
            features: [
                "Access to gym equipment",
                "Locker facility",
                "1 free fitness assessment",
                "Open hours: 9 AM - 5 PM"
            ]
        },
        {
            id: 2,
            planName: "Standard",
            pricePerMonth: 40,
            currency: "USD",
            features: [
                "Access to gym equipment",
                "Unlimited locker facility",
                "Group fitness classes",
                "1 guest pass per month",
                "Extended hours: 6 AM - 10 PM"
            ]
        },
        {
            id: 3,
            planName: "Premium",
            pricePerMonth: 70,
            currency: "USD",
            features: [
                "24/7 gym access",
                "Free personal training (2 sessions/month)",
                "All group fitness & yoga classes",
                "Spa & sauna access",
                "Priority customer support",
                "Unlimited guest passes"
            ]
        }
    ];

    return (
        <div className='m-12'>
             <h2 className="text-5xl">Best Prices in the Town</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {
                gymPricing.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;