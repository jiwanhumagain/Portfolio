'use client';
import Navbar from "../components/navbar";
import HomeComponent from "../components/home";
import Marquee from "../components/marquee";
import Services from "../components/services";
import AboutMe from "../components/aboutme";
import Education from "../components/education";
import Projects from "../components/projects";
import PricingModel from "../components/pricing";
import Contact from "../components/contact";
import Blogs from "../components/blogs";
import Footer from "../components/footer";
import DetailsPage from "../components/modules/details/detailsPage";

export default function Homepage() {
    const gridBackgroundStyle = {
        backgroundImage:
            'linear-gradient(rgba(2, 2, 2, 0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(2, 2, 2, 0.1) 2px, transparent 2px)',
        backgroundSize: '50px 50px',
        opacity: 0.2,
        position: 'fixed', // Use fixed to ensure it covers the viewport
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    };

    return (
        <>
            {/* Grid background */}
            <div style={gridBackgroundStyle} className="pointer-events-none"></div>

            {/* Main content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
            <marquee scrollamount="10" className="text-2xl sm:text-3xl lg:text-5xl bg-red-400 text-white flex justify-center">Currently Populating Real Data, Switch to light mode, Might not be responsive for some devices</marquee>
                <HomeComponent />
                <Marquee />
                <Services/>
                <AboutMe/>
                <Education/>
                <Projects/>
                <PricingModel/>
                <Marquee />
                <Contact/>
                <Marquee />
                <Blogs/>
                <Marquee />
                <Footer/>
                {/* <DetailsPage/> */}


            </div>
        </>
    );
}
