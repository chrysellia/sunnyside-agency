import React from 'react';
import './About.style.scss';

const About = () => {
    return (
        <div className="about-component">
            <div className="about-content">

                {/* Text */}
                <div className="content-wrapper">
                    <div className="content-text">
                        <div className="text-title">Transform your brand</div>
                        <div className="text-description">
                            <p>
                                We are a full-service creating agency specializing in helping brands grow fast.
                                Engage your clients through compelling visuals that do most of the work for you.
                            </p>
                        </div>
                        <div className="information-wrapper">
                            <div className="text-information">
                                <div className="text-content">LEARN MORE</div>
                                <div className="text-style"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="content-image">
                    <img src="images/desktop/image-transform.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default About
