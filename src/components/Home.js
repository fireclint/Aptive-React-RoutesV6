import React from 'react'
import './HomeStyles.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import Faq from './Faq'
import { Contact } from './Contact'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <Testimonials />
            <Faq />
            <Contact />
            <Footer/>
        </div>
    )
}

export default Home
