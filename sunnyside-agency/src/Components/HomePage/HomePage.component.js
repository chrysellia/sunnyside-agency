import React from 'react'
import Navbar from '../Navbar/Navbar.component'
import Body from '../Body/Body.component'
import Testimonials from '../Testimonials/Testimonials.component'
import Gallery from '../Gallery/Gallery.component'
import Footer from '../Footer/Footer.component'

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Body/>
            <Testimonials/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

export default HomePage
