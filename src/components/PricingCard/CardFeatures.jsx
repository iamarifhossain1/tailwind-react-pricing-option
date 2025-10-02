import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const CardFeatures = ({feature}) => {
    return (
        <div className=' mt-4'>
            <p className='flex gap-2'><CircleCheckBig className='text-green-500'></CircleCheckBig> {feature}</p>
        </div>
        
    );
};

export default CardFeatures;