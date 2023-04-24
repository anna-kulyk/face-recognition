import React from 'react';
import './FaceBox.css';

const FaceBox = ({ top, left, bottom, right }) => {
    const boxStyle = {
        width: `${(right - left) * 100}%`,
        height: `${(bottom - top) * 100}%`,
        top: `${top * 100}%`,
        left: `${left * 100}%`,
    };

    return (
        <div style={boxStyle} className='facebox'></div>
    );
};

export default FaceBox;