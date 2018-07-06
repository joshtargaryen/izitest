import React from 'react';
import { string } from 'prop-types';
import './hero.css';
 
const Hero = ({src}) => {
    return (
        <div className="Hero">
            <img src={src} alt="hero"/>
        </div>
    );
};

Hero.propTypes = {
    src: string.isRequired,
};

export default Hero;