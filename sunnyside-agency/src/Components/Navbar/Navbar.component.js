import React from 'react';
import './Navbar.style.scss';
// import Hero from '../Hero/Hero.component';
import { GrMenu } from 'react-icons/gr'

const Navbar = () => {
    return (
        <div className="navbar-component">
            <div className="navbar-image" style={{backgroundImage:'url(images/desktop/image-header.jpg)'}}>
                {/* <Hero/> */}
                <div className="arrow-icon">
                    <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 3v100M3 95.484l15 15 15-15"/></g>
                    </svg>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-logo">sunnyside</div>

                    {/* Menu desktop */}
                    <div className="menu-desktop">
                        <div className="list-menu">
                            <div className="list-item">About</div>
                            <div className="list-item">Services</div>
                            <div className="list-item">Projects</div>
                            <div className="list-item-active">CONTACT</div>
                        </div>
                    </div>

                    {/* Menu mobile */}
                    <div className="menu-mobile">
                        <div className="mobile-design">
                            <div className="menu-icon" style={{color:'white'}}><GrMenu/></div>
                            <div className="menu-liste">
                                <div className="menu-item">About</div>
                                <div className="menu-item">Services</div>
                                <div className="menu-item">Projects</div>
                                <div className="special-list">Contact</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-title">WE ARE CREATIVES</div>
            </div>
        </div>
    )
}

export default Navbar
