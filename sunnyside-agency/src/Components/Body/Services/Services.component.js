import React from 'react';
import './Services.style.scss'

const Services = () => {
    return (
        <div className="services-component">
            <div className="services-content">

                {/* Graphic Design */}
                <div className="graphic-parent" style={{backgroundImage:'url(images/desktop/image-graphic-design.jpg)'}}>
                    <div className="graphic-wrapper">
                        <div className="graphic-content">
                            <div className="graphic-title">Graphic Design</div>
                            <div className="graphic-description">
                                <p>
                                    Great design makes you memorable. We deliver <br/> artwork that underscores your brand message<br/>
                                    and captures potential clients' attention.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photography */}
                <div className="photography-parent" style={{backgroundImage:'url(images/desktop/image-photography.jpg)'}}>
                    <div className="photography-wrapper">
                        <div className="photography-content">
                            <div className="photography-title">Photography</div>
                            <div className="photography-description">
                                <p>
                                    Increase your credibility by getting the most <br/> stunning, high-quality photos
                                    that improve your <br/> business image.
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Services
