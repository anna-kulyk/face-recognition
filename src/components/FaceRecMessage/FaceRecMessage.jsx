import React from 'react';
import './FaceRecMessage.css';

const FaceRecMessage = ({ isFirstImage, isLoading, isValidUrl, boxes }) => {

    if (isFirstImage) {
        return (
            <div className="face-recognition__message">
                <p>This App will magically detect faces in your picture.</p>
                <p>Give it a try.</p>
            </div>
        );
    } else if (!isLoading && isValidUrl && boxes.length === 0) {
        return (
            <div className="face-recognition__message">
                <p>This picture doesn't seem to have any faces in it ☹</p>
                <p>Try another one.</p>
            </div>
        );
    } else if (!isLoading && isValidUrl && boxes.length > 0) {
        return (
            <div className="face-recognition__message">
                <p>{`Total count of faces in this picture: ${boxes.length}`}</p>
                <p>Try another one.</p>
            </div>
        );
    } else if (!isLoading && !isValidUrl) {
        return (
            <div className="face-recognition__message">
                <p>Oooops! Something went wrong!</p>
                <p>Try another one.</p>
            </div>
        );
    } else {
        return (
            <div className="face-recognition__message">
                <p>Loading results...</p>
            </div>
        );
    }
};

export default FaceRecMessage;