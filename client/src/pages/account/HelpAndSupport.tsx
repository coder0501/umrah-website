

import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import AccountSidebar from "./AccountSidebar";

const HelpAndSupport: React.FC = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index: any) => {
        setOpen(open === index ? null : index);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    // const selectLanguage = (language) => {
    //     setSelectedLanguage(language);
    //     setIsOpen(false);
    // };

    return (
        <>
            <Navbar />
            <section className="account-personal-info-section">
                <div className="account-personal-info">
                    <div className="account-personal-info-container">
                        <div className="account-personal-info-main">
                            <div className="account-settings">
                                <AccountSidebar />
                                <div className="help-and-support-details">
                                    <div className="privacy-policy-title-date">
                                        <div className="privacy-policy-title">
                                            <h3>
                                                Privacy Policy
                                            </h3>
                                        </div>
                                        <div className="privacy-policy-date">
                                            <p>
                                                Effective Date: September 12, 2024
                                            </p>
                                        </div>
                                    </div>
                                    <div className="help-and-support-faq">
                                        {/* <div className="faq"> */}
                                        <div className="faq-container">
                                            <div className="faq-content">
                                                <div className="faq-item">
                                                    <div className="faq-question" onClick={() => toggle(0)}>
                                                        <h2>Where can I watch?</h2>
                                                        <span>
                                                            {open === 0 ? "×" : "+"}
                                                        </span>
                                                    </div>
                                                    {open === 0 && (
                                                        <div className="faq-answer">
                                                            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
                                                        </div>
                                                    )}
                                                    <hr />
                                                </div>
                                                <div className="faq-item">
                                                    <div className="faq-question" onClick={() => toggle(1)}>
                                                        <h2>Tempus magna risus interdum ultricies sed urna?</h2>
                                                        <span>
                                                            {open === 1 ? "×" : "+"}
                                                        </span>
                                                    </div>
                                                    {open === 1 && (
                                                        <div className="faq-answer">
                                                            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
                                                        </div>)}
                                                    <hr />
                                                </div>
                                                <div className="faq-item">
                                                    <div className="faq-question" onClick={() => toggle(2)}>
                                                        <h2>Augue in nibh urna volutpat mattis?</h2>
                                                        <span>
                                                            {open === 2 ? "×" : "+"}
                                                        </span>
                                                    </div>
                                                    {open === 2 && (
                                                        <div className="faq-answer">
                                                            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
                                                        </div>)}
                                                    <hr />
                                                </div>
                                                <div className="faq-item">
                                                    <div className="faq-question" onClick={() => toggle(3)}>
                                                        <h2>Eu egestas sed sed posuere ultrices ?</h2>
                                                        <span>
                                                            {open === 3 ? "×" : "+"}
                                                        </span>
                                                    </div>
                                                    {open === 3 && (
                                                        <div className="faq-answer">
                                                            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
                                                        </div>)}
                                                    <hr />
                                                </div>
                                                <div className="faq-item">
                                                    <div className="faq-question" onClick={() => toggle(4)}>
                                                        <h2> Elementum facilisi aliquam, nisi, orci vulputate?</h2>
                                                        <span>
                                                            {open === 4 ? "×" : "+"}
                                                        </span>
                                                    </div>
                                                    {open === 4 && (
                                                        <div className="faq-answer">
                                                            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
                                                        </div>)}
                                                    <hr />
                                                </div>
                                                <div className="faq-item">
                                                    <div className="faq-question" onClick={() => toggle(5)}>
                                                        <h2>Nibh at odio dolor etiam neque in vel id orci?</h2>
                                                        <span>
                                                            {open === 5 ? "×" : "+"}
                                                        </span>
                                                    </div>
                                                    {open === 5 && (
                                                        <div className="faq-answer">
                                                            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
                                                        </div>)}
                                                    <hr />
                                                </div>
                                                <div className="faq-item">
                                                    <div className="faq-question" onClick={() => toggle(6)}>
                                                        <h2>Non dolor at velit lorem erat maecenas?</h2>
                                                        <span>
                                                            {open === 6 ? "×" : "+"}
                                                        </span>
                                                    </div>
                                                    {open === 6 && (
                                                        <div className="faq-answer">
                                                            Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
                                                        </div>)}
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default HelpAndSupport;