import Navbar from "./components/common/Navbar";
// import AllPackages from "../components/packages/AllPackages";
import Footer from "./components/common/Footer";
import PackageConfirmation from "./components/PackageConfirmation";
import "./style.css";

const SuccessfullCompleted = () => {
    return (
        <>
            <Navbar />
            <PackageConfirmation />
            <Footer />
        </>
    )
}

export default SuccessfullCompleted;

