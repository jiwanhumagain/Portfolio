import Navbar from "../../components/navbar";
import Marquee from "../../components/marquee";
import AmazingProject from "../../components/amazingproject";
import Footer from "../../components/footer";
import PricingPage from "../../components/modules/pricing/pricingContainer";
import BlogsContainer from "../../components/modules/blogs/blogsContainer";
export default function BlogsPage() {
    const gridBackgroundStyle = {
        backgroundImage:
            'linear-gradient(rgba(2, 2, 2, 0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(2, 2, 2, 0.1) 2px, transparent 2px)',
        backgroundSize: '50px 50px',
        opacity: 0.2,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
    };
    return (
        <>
            <div style={gridBackgroundStyle} className="pointer-events-none"></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <BlogsContainer />
                <Marquee />
                <AmazingProject />
                <Marquee />
                <Footer />
            </div>
        </>
    )
}

