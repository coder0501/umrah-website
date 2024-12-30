import React from "react";
import Navbar from "../components/common/Navbar";
import AccountSidebar from "./AccountSidebar";

const Notification: React.FC = () => {
    return (
        <>
            <Navbar />
            <section className="account-personal-info-section">
                <div className="account-personal-info">
                    <div className="account-personal-info-container">
                        <div className="account-personal-info-main">
                            <div className="account-settings">
                                <AccountSidebar />
                                <div className="booking-notification">
                                    <div className="booking-notification-title">
                                        <h3>
                                            Notifications
                                        </h3>
                                    </div>
                                    <div className="booking-notification-items">
                                        <div className="booking-notification-item">
                                            <div className="booking-notification-item-title-duration">
                                                <h3>
                                                    Booking Confirmation
                                                </h3>
                                                <p>
                                                    <li>Now</li>
                                                </p>
                                            </div>
                                            <div className="booking-notification-item-text">
                                                <p>
                                                    Your Umrah package has been successfully booked! Check your email for confirmation and details.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="booking-notification-item">
                                            <div className="booking-notification-item-title-duration">
                                                <h3>
                                                    Booking Confirmation
                                                </h3>
                                                <p>
                                                    <li>Now</li>
                                                </p>
                                            </div>
                                            <div className="booking-notification-item-text">
                                                <p>
                                                    Your Umrah package has been successfully booked! Check your email for confirmation and details.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="booking-notification-item">
                                            <div className="booking-notification-item-title-duration">
                                                <h3>
                                                    Booking Confirmation
                                                </h3>
                                                <p>
                                                    <li>Now</li>
                                                </p>
                                            </div>
                                            <div className="booking-notification-item-text">
                                                <p>
                                                    Your Umrah package has been successfully booked! Check your email for confirmation and details.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="booking-notification-item">
                                            <div className="booking-notification-item-title-duration">
                                                <h3>
                                                    Booking Confirmation
                                                </h3>
                                                <p>
                                                    <li>Now</li>
                                                </p>
                                            </div>
                                            <div className="booking-notification-item-text">
                                                <p>
                                                    Your Umrah package has been successfully booked! Check your email for confirmation and details.
                                                </p>
                                            </div>
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
}

export default Notification;




