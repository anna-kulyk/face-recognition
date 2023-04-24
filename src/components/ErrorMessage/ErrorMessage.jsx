import React from 'react';
import './ErrorMessage.css';
import errorImage from '../../assets/error.png';

const ErrorMessage = () => {
    return (
        <div className='error-message'>
            <img className='error-img' src={errorImage} alt="error" />
        </div>
    );
};

export default ErrorMessage;