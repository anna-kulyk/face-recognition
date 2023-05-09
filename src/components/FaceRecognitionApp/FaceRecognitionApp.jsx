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

    // const PAT_KEY = "c0a5747fc60d4a84a6c8a13b39c8f405";

    // const getClarifaiRequestOptions = (url, key) => {

    //     const raw = JSON.stringify({
    //         "user_app_id": {
    //             "user_id": "clarifai",
    //             "app_id": "main"
    //         },
    //         "inputs": [
    //             {
    //                 "data": {
    //                     "image": {
    //                         "url": `${url}`
    //                     }
    //                 }
    //             }
    //         ]
    //     });

    //     const requestOptions = {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Authorization': `Key ${key}`
    //         },
    //         body: raw
    //     };

    //     return requestOptions;
    // }

    useEffect(() => {
        // const requestOptions = getClarifaiRequestOptions(imageUrl, PAT_KEY);
        // fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
        //     .then(response => response.json())
        //     .then(result => {
        //         if (result.status.code === 10000) {
        //             setIsValidUrl(true);
        //             if (result.outputs[0].data.regions) {
        //                 setBoxes(result.outputs[0].data.regions);
        //             } else {
        //                 setBoxes([]);
        //             }
        //         }
        //     })
        //     .catch(error => { console.log('error', error) })
        //     .finally(() => setIsLoading(false));
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