import React from 'react'
import Navbar from '../Navbar/Navbar.component'
import Body from '../Body/Body.component'
import Testimonials from '../Testimonials/Testimonials.component'
import Gallery from '../Gallery/Gallery.component'

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Body/>
            <Testimonials/>
            <Gallery/>
        </div>
    )
}

export default HomePage
