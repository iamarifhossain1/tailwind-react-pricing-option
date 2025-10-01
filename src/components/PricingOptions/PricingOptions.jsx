import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricePromise}) => {
    const pricingData = use(pricePromise)
    
    
    return (
        <div>
            <h2>Get our Membership</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-5  '>
                {
                    pricingData.map(price => <PricingCard key={price.id} pricing={pricing}></PricingCard>)
                }
            </div>

        </div>
    );
};

export default PricingOptions;