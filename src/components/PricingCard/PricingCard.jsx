import React from 'react';

const PricingCard = ({pricing}) => {
    const {name, price, description} = pricing;
    
    return (
        <div>
            {/* Card Header */}
            <div className='bg-white shadow-lg text-black rounded-lg p-4'>
                <h1 className='text-4xl'>{pricing.name}</h1>
                <h4 className='text-2xl'>{pricing.price}</h4>
            </div>
        </div>
    );
};

export default PricingCard;