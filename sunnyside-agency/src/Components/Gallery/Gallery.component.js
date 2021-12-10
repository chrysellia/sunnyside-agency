import React from 'react';
import './Gallery.style.scss';

const Gallery = () => {
    return (
        <div className="gallery-component">
            <div className="gallery-image">
                <div className="image-item">
                    <img src="images/desktop/image-gallery-milkbottles.jpg"/>
                </div>
                <div className="image-item">
                    <img src="images/desktop/image-gallery-orange.jpg"/>
                </div>
                <div className="image-item">
                    <img src="images/desktop/image-gallery-cone.jpg"/>
                </div>
                <div className="image-item">
                    <img src="images/desktop/image-gallery-sugarcubes.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Gallery
