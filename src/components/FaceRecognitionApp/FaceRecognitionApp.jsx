import React, { useState, useEffect } from 'react';
import FaceRecOutput from '../FaceRecOutput/FaceRecOutput';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import ImageLoader from '../ImageLoader/ImageLoader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const FaceRecognitionApp = () => {

    const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
    const [isValidUrl, setIsValidUrl] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [boxes, setBoxes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/facedetect', {
            method: 'post',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                imageUrl: imageUrl
            })
        })
            .then(response => {
                if (response.status === 200) {
                    setIsValidUrl(true);
                } else {
                    throw new Error();
                }
                return response.json()
            })
            .then(data => setBoxes(data))
            .catch(error => { console.log('error', error) })
            .finally(() => setIsLoading(false));
    }, [imageUrl]);

    return (
        <div>
            <ImageLinkForm setImageUrl={setImageUrl} setIsValidUrl={setIsValidUrl} setIsLoading={setIsLoading} />
            {!isLoading && isValidUrl && <FaceRecOutput url={imageUrl} boxes={boxes} />}
            {isLoading && <ImageLoader />}
            {!isLoading && !isValidUrl && <ErrorMessage />}
        </div>
    );
};

export default FaceRecognitionApp;