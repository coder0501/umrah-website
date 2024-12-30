import React from "react";
import Navbar from "./components/common/Navbar";
import UmrahPackageDetail from "./components/package-detail/UmrahPackageDetail"
import Footer from "./components/common/Footer";
import Itinerary from "./components/packages/Itinerary";
import AgentsTestimonialsInfo from "./components/packages/AgentsTestimonialsInfo";
import "./style.css";

const PackageDetail: React.FC = () => {

    return (
        <>

            <Navbar />
            <UmrahPackageDetail />
            <Itinerary />
            <AgentsTestimonialsInfo />
            <Footer />
        </>
    );
};

export default PackageDetail;