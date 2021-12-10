import React from 'react';
import './StandOut.style.scss';

const StandOut = () => {
    return (
        <div className="stand-out-component">
            <div className="stand-out-content">

                {/* Image */}
                <div className="stand-out-image">
                    <img src="images/desktop/image-stand-out.jpg"/>
                </div>
                
                {/* Text */}
                <div className="stand-out-wrapper">
                    <div className="stand-out-text">
                        <div className="stand-out-title">Stand out to the right audience</div>
                        <div className="stand-out-description">
                            <p>
                                Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, 
                                we'll build and extend your brand in digital places.
                            </p>
                        </div>
                        <div className="button-wrapper">
                            <div className="button-information">LEARN MORE</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StandOut
