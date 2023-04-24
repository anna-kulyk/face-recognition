import React from 'react';
import './ImageLoader.css';
import { Oval } from 'react-loader-spinner';

const ImageLoader = () => {
    return (
        <div className='image-loader'>
            <Oval
                height={100}
                width={100}
                color="rgb(204, 128, 255)"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#ffffff"
                strokeWidth={5}
                strokeWidthSecondary={3}
            />
        </div>
    );
};

export default ImageLoader;