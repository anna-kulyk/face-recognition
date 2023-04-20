import React, { useEffect } from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ url }) => {

    const PAT_KEY = "c0a5747fc60d4a84a6c8a13b39c8f405";

    const getClarifaiRequestOptions = (url, key) => {

        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": "clarifai",
                "app_id": "main"
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": `${url}`
                        }
                    }
                }
            ]
        });

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Key${key}`
            },
            body: raw
        };

        return requestOptions;
    }

    // useEffect(() => {
    //     fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // })

    return (
        <div className="face-recognition">
            <div className="face-recognition__body">
                <img className="face-recognition__img" src={url} alt="portrait" />
                <div className='box'></div>
            </div>
        </div>
    );
};

export default FaceRecognition;