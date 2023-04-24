import React, { useState } from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ setImageUrl, setIsValidUrl, setIsLoading }) => {
    const [urlInput, setUrlInput] = useState('');

    const detectBtnHandler = () => {
        if (urlInput.trim() === '') return;
        setIsLoading(true);
        setIsValidUrl(false);
        setImageUrl(urlInput);
        setUrlInput('');
    }

    return (
        <div className="form">
            <div className="form__text">
                <p>{`This App will magically detect faces in your pictures.`}</p>
                <p>{`Give it a try.`}</p>
            </div>
            <div className="form__body">
                <input className="form__input"
                    type="text"
                    name="urlInput"
                    id="urlInput"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder='Enter image ulr' />
                <button className="form__btn" onClick={detectBtnHandler}>Detect</button>
            </div>
        </div>
    );
};

export default ImageLinkForm;