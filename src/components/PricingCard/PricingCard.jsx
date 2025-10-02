import React from 'react';
import CardFeatures from './CardFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, description, features} = pricing;
    
    return (
        <div className='flex flex-col bg-white shadow-lg text-black rounded-lg p-4 h-full'>
            {/* Card Header */}
            <div className=''>
                <h1 className='text-4xl'>{name}</h1>
                <h4 className='text-2xl mt-4'>{price}</h4>
            </div>

            {/* Card Body */}
            <div className='flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <CardFeatures key={index} feature={feature}></CardFeatures>)
                }
            </div>
            <button className="btn w-full mt-5">Subscribe Now!</button>

        </div>
    );
};

export default PricingCard;