import React from 'react';
import './Logo.css';
import Tilt from 'react-parallax-tilt';
import logo from '../../assets/face-id.png';

const Logo = () => {
    return (
        <div className='logo'>
            <Tilt>
                <div style={{ height: '100%', width: '100%' }}>
                    <img className='logo__img' src={logo} alt="logo" />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;