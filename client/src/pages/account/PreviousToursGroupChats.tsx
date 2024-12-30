import React from "react";
import Navbar from "../components/common/Navbar";
import { MdCalendarToday } from 'react-icons/md';
import AccountSidebar from "./AccountSidebar";
import { Link } from "react-router-dom";

const PreviousToursGroupChats: React.FC = () => {

    return (
        <>
            <Navbar />
            <section className="account-personal-info-section">
                <div className="account-personal-info">
                    <div className="account-personal-info-container">
                        <div className="account-personal-info-main">
                            <div className="account-settings">
                                <AccountSidebar />
                                <div className="prevtours-grp-chats">
                                    <div className="prevtours-grp-chats-title">
                                        <h3>Your Previous Umrah Journeys</h3>
                                    </div>
                                    <div className="prevtours-grp-chats-items">
                                        <div className="prevtour-grp-chat-item">
                                            <div className="prevtour-details">
                                                <div className="prevtour-booking-ref-status">
                                                    <p>
                                                        Booking Reference: <span className="booking-ref">UMR-12345678</span>
                                                    </p>
                                                </div>
                                                <div className="prevtour-pkg-title-duration-dates-price">
                                                    <div className="prevtour-pkg-title-duration">
                                                        <p>Exclutive Umrah Packages</p>
                                                        <span id="package-detail-duration" className="highlight-text-with-yellow">10 Nights | 11 Days</span>
                                                    </div>
                                                    <div className="prevtour-dates">
                                                        <MdCalendarToday className="calendar-icon" />
                                                        <span className="date-display">
                                                            16 Jan 2024 - 26 Jan 2024
                                                        </span>
                                                    </div>
                                                    <div className="prevtour-price">
                                                        <span>
                                                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9 9.5C11.3472 9.5 13.25 7.59721 13.25 5.25C13.25 2.90279 11.3472 1 9 1C6.65279 1 4.75 2.90279 4.75 5.25C4.75 7.59721 6.65279 9.5 9 9.5Z" fill="#292524" stroke="white" />
                                                                <path d="M9 10.375C5.0609 10.375 1.6825 13.033 1.6825 16.5C1.6825 16.9861 2.07135 17.375 2.5575 17.375H15.4425C15.9286 17.375 16.3175 16.9861 16.3175 16.5C16.3175 13.033 12.9391 10.375 9 10.375Z" fill="#292524" stroke="white" />
                                                                <path d="M15 9.5C17.3472 9.5 19.25 7.59721 19.25 5.25C19.25 2.90279 17.3472 1 15 1C12.6528 1 10.75 2.90279 10.75 5.25C10.75 7.59721 12.6528 9.5 15 9.5Z" fill="#292524" stroke="white" />
                                                                <path d="M15 10.375C11.0609 10.375 7.6825 13.033 7.6825 16.5C7.6825 16.9861 8.07135 17.375 8.5575 17.375H21.4425C21.9286 17.375 22.3175 16.9861 22.3175 16.5C22.3175 13.033 18.9391 10.375 15 10.375Z" fill="#292524" stroke="white" />
                                                            </svg>
                                                            Double
                                                        </span>
                                                        <div>
                                                            4530SR / <span className="highlight-text-with-yellow">Person</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="prevtour-grp-details-link">
                                                    <Link to="#">
                                                        View Group
                                                    </Link>
                                                    <Link to="#">
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="prevtour-img">
                                                <div className="prevtour-pkg-type">
                                                    <p>Fixed</p>
                                                </div>
                                                <span>
                                                    <img src="./prevtour-img.png" alt="prevtour-img" />
                                                </span>
                                            </div>

                                        </div>
                                        <div className="prevtour-grp-chat-item">
                                            <div className="prevtour-details">
                                                <div className="prevtour-booking-ref-status">
                                                    <p>
                                                        Booking Reference: <span className="booking-ref">UMR-12345678</span>
                                                    </p>
                                                    <p className="prevtour-status">
                                                        Completed
                                                    </p>
                                                </div>
                                                <div className="prevtour-pkg-title-duration-dates-price">
                                                    <div className="prevtour-pkg-title-duration">
                                                        <p>Exclutive Umrah Packages</p>
                                                        <span id="package-detail-duration" className="highlight-text-with-yellow">10 Nights | 11 Days</span>
                                                    </div>
                                                    <div className="prevtour-dates">
                                                        <MdCalendarToday className="calendar-icon" />
                                                        <span className="date-display">
                                                            16 Jan 2024 - 26 Jan 2024
                                                        </span>
                                                    </div>
                                                    <div className="prevtour-price">
                                                        <span>
                                                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9 9.5C11.3472 9.5 13.25 7.59721 13.25 5.25C13.25 2.90279 11.3472 1 9 1C6.65279 1 4.75 2.90279 4.75 5.25C4.75 7.59721 6.65279 9.5 9 9.5Z" fill="#292524" stroke="white" />
                                                                <path d="M9 10.375C5.0609 10.375 1.6825 13.033 1.6825 16.5C1.6825 16.9861 2.07135 17.375 2.5575 17.375H15.4425C15.9286 17.375 16.3175 16.9861 16.3175 16.5C16.3175 13.033 12.9391 10.375 9 10.375Z" fill="#292524" stroke="white" />
                                                                <path d="M15 9.5C17.3472 9.5 19.25 7.59721 19.25 5.25C19.25 2.90279 17.3472 1 15 1C12.6528 1 10.75 2.90279 10.75 5.25C10.75 7.59721 12.6528 9.5 15 9.5Z" fill="#292524" stroke="white" />
                                                                <path d="M15 10.375C11.0609 10.375 7.6825 13.033 7.6825 16.5C7.6825 16.9861 8.07135 17.375 8.5575 17.375H21.4425C21.9286 17.375 22.3175 16.9861 22.3175 16.5C22.3175 13.033 18.9391 10.375 15 10.375Z" fill="#292524" stroke="white" />
                                                            </svg>
                                                            Double
                                                        </span>
                                                        <div>
                                                            4530SR / <span className="highlight-text-with-yellow">Person</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="prevtour-grp-details-link">
                                                    <Link to="#">
                                                        View Group
                                                    </Link>
                                                    <Link to="#">
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="prevtour-img">
                                                <div className="prevtour-pkg-type">
                                                    <p>Fixed</p>
                                                </div>
                                                <span>
                                                    <img src="./prevtour-img.png" alt="prevtour-img" />
                                                </span>
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
};

export default PreviousToursGroupChats;