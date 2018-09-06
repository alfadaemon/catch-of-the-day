import React from 'react';

const Header = ({tagline}) => (//tagline comes from props
    <header className='top'>
        <h1> Catch 
            <span className='ofThe'>
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
            Day
        </h1>
            <h3 className="tagline">{tagline}</h3>
     </header> 
);

export default Header;