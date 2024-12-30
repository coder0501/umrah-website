import Navbar from "./components/common/Navbar";
import HomeBanner from "./components/home/HomeBanner";
import HomePackages from "./components/home/HomePackages";
import HomeSacredJourney from "./components/home/HomeSacredJourney";
import HometTestimonials from "./components/home/HometTestimonials";
import Footer from "./components/common/Footer";
import "./style.css";

const Home = () => {
    return (
        <>
            <Navbar />
            <HomeBanner />
            <HomePackages />
            <HomeSacredJourney />
            <HometTestimonials />
            <Footer />
        </>
    )
}

export default Home;