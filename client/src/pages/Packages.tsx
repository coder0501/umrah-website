import Navbar from "./components/common/Navbar";
import AllPackages from "./components/packages/AllPackages";
import Footer from "./components/common/Footer";
import "./style.css";

const Packages = () => {
    return (
        <>
            <Navbar />
            <AllPackages />
            <Footer />
        </>
    )
}

export default Packages;