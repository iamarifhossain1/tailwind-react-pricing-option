import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='px-4'>
                <a href={route.path}>{route.name}</a>
                </li>
        </div>
    );
};

export default Link;