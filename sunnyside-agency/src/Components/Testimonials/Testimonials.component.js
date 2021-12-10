import React from 'react'
import './Testimonials.style.scss'

const Testimonials = () => {
    return (
        <div className="testimonials-component">
            <div className="testimonials-content">
                <div className="testimonials-title">CLIENT TESTIMONIALS</div>
                
                {/* Card */}
                <div className="testimonials-body">

                    {/* First Card */}
                    <div className="testimonials-card">
                        <div className="card-image">
                            <img src="images/image-emily.jpg"/>
                        </div>
                        <div className="card-description">
                            <p>
                                We put our trust in Sunnyside and they <br/> delivered, making sure
                                our needs were met <br/> and deadlines were always hit.
                            </p>
                        </div>
                        <div className="card-author">Emily R.</div>
                        <div className="author-job">Marketing Director</div>
                    </div>

                    {/* Second Card */}
                    <div className="testimonials-card">
                        <div className="card-wrapper">
                            <div className="card-image">
                                <img src="images/image-thomas.jpg"/>
                            </div>
                            <div className="card-description">
                                <p>
                                    Sunnyside's enthusiasm coupled with their <br/> keen interest in our brand's success
                                    made it <br/> a satisfying and enjoyable experience.
                                </p>
                            </div>
                            <div className="card-author">Thomas S.</div>
                            <div className="author-job">Chief Operating Officer</div>
                        </div>
                    </div>

                    {/* Third Card */}
                    <div className="testimonials-card">
                        <div className="card-image">
                            <img src="images/image-jennie.jpg"/>
                        </div>
                        <div className="card-description">
                            <p>
                                Incredible end result! Our sales increased <br/> over 400%
                                when we worked with Sunnyside. <br/> Highly recommanded!
                            </p>
                        </div>
                        <div className="card-author">Jennie F.</div>
                        <div className="author-job">Business Owner</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
