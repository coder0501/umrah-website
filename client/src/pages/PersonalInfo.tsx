import React from "react";
import Navbar from "./components/common/Navbar";
import PersonalDetail from "./components/personal-info/PersonalDetail";
import Footer from "./components/common/Footer";
import "./style.css";

const PersonalInfo: React.FC = () => {
    return (
        <>
            <Navbar />
            <PersonalDetail />
            <Footer />
        </>
    );
};

export default PersonalInfo;