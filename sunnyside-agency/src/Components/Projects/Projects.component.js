import React from 'react';
import './Projects.style.scss';

const Projects = () => {
    return (

        <div className="projects-component">
            <div className="projects-image">
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

export default Projects
