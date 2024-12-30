
import React from "react";
import Navbar from "../components/common/Navbar";
import AccountSidebar from "./AccountSidebar";

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="account-personal-info-section">
                <div className="account-personal-info">
                    <div className="account-personal-info-container">
                        <div className="account-personal-info-main">
                            <div className="account-settings">
                                <AccountSidebar />
                                <div className="privacy-policy-details">
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
                                    <div className="privacy-policy-content" id="privacy-policy-intro">
                                        <div className="privacy-policy-content-title">
                                            <li>
                                                Introduction
                                            </li>
                                        </div>
                                        <div className="privacy-policy-content-text">
                                            <p>
                                                At [Platform Name], we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services to book Umrah packages.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="privacy-policy-content" id="privacy-policy-collected-info">
                                        <div className="privacy-policy-content-title">
                                            <li>
                                                Information We Collect
                                            </li>
                                        </div>
                                        <div className="privacy-policy-content-text">
                                            <p>
                                                We collect personal data to ensure a smooth and secure booking experience, including:
                                                <li>Personal Information: Name, email, phone number, address, passport details, etc.</li>
                                                <li>Payment Information: Credit/debit card details or other payment information.</li>
                                                <li>Travel Preferences: Details about your travel dates, group size, and specific needs.</li>
                                                <li>Communications: Messages, feedback, and queries via chat or email.</li>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="privacy-policy-content" id="privacy-policy-info-usage">
                                        <div className="privacy-policy-content-title">
                                            <li>
                                                How We Use Your Information
                                            </li>
                                        </div>
                                        <div className="privacy-policy-content-text">
                                            <p>
                                                We use the information collected for:
                                                <li>  Booking Processing: To confirm and manage your Umrah packages and related services.</li>
                                                <li>Personalization: To offer tailored package recommendations and customized services.</li>
                                                <li>Customer Support: To respond to your inquiries and resolve issues.</li>
                                                <li>Marketing: To send you promotional offers and package updates, with your consent.</li>
                                                <li>Legal Compliance: To comply with legal obligations and for fraud prevention.</li>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="privacy-policy-content" id="privacy-policy-info-sharing">
                                        <div className="privacy-policy-content-title">
                                            <li>
                                                Sharing Your Information
                                            </li>
                                        </div>
                                        <div className="privacy-policy-content-text">
                                            <p>
                                                We may share your information with third parties in the following cases:
                                                <li>Service Providers: Travel agents, hotels, transportation, and payment processors.</li>
                                                <li>Legal Obligations: When required by law, such as with government authorities.</li>
                                                <li>Group Communication: When joining group chats for packages, fellow pilgrims may see basic information about you.</li>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="privacy-policy-content" id="privacy-policy-changes">
                                        <div className="privacy-policy-content-title">
                                            <li>
                                                Changes to the Privacy Policy
                                            </li>
                                        </div>
                                        <div className="privacy-policy-content-text">
                                            <p>
                                                We may update this Privacy Policy to reflect changes in our services or legal requirements. Any updates will be posted on this page, and we will notify you via email for significant changes.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="privacy-policy-content" id="privacy-policy-contact-details">
                                        <div className="privacy-policy-content-title">
                                            <li>
                                                Contact Us
                                            </li>
                                        </div>
                                         <div className="privacy-policy-content-text">
                                            <p>
                                                If you have any questions about our Privacy Policy or how we handle your data, please contact us at:
                                                <li>Email: <span className="email">support@[platformname].com</span></li>
                                                <li>Phone: <span className="phone">+[Insert Phone Number]</span></li>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;