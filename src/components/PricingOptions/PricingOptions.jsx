import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOptions = ({pricePromise}) => {
    const pricingData = use(pricePromise)
    
    
    return (
        <div>
            <h2 className='text-center text-xl font-bold lg:text-4xl mt-5'>Get our Membership</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-5 mt-5 px-5 lg:px-10'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
            </div>

        </div>
    );
};

export default PricingOptions;