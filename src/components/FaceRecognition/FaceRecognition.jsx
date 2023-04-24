import React from 'react';
import './FaceRecognition.css';
import FaceBox from '../FaceBox/FaceBox';

const FaceRecognition = ({ url, boxes }) => {

    const boxElements = boxes.map((box, index) => {
        const boundingBox = box.region_info.bounding_box;
        return <FaceBox key={index}
            top={boundingBox.top_row}
            left={boundingBox.left_col}
            bottom={boundingBox.bottom_row}
            right={boundingBox.right_col} />
    });

    return (
        <div className="face-recognition">
            <div className="face-recognition__body">
                <img className="face-recognition__img" src={url} alt="portrait" />
                {boxElements}
            </div>
        </div>
    );
};

export default FaceRecognition;