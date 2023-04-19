import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div className="form">
            <div className="form__text">
                <p>{`This App will magically detect faces in your pictures.`}</p>
                <p>{`Give it a try.`}</p>
            </div>
            <div className="form__body">
                <input className="form__input" type="text" name="urlInput" id="urlInput" placeholder='Enter image ulr' />
                <button className="form__btn">Detect</button>
            </div>
        </div>
    );
};

export default ImageLinkForm;