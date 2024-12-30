import React, { useState } from "react";
import axios from "axios"; // Importing Axios for making HTTP requests
import { useNavigate, Link } from 'react-router-dom'; // Importing React Router hooks and components

// HomeBanner Component: Displays a banner for the home page with a heading, description, and a button linking to packages
const HomeBanner: React.FC = () => {
    return (
        <section> {/* Section to encapsulate the banner */}
            <div className="home-banner"> {/* Main container for the banner */}
                <div className="home-banner-container"> {/* Nested container for styling and layout */}
                    <div className="home-banner-main"> {/* Main content area of the banner */}
                        <div className="home-banner-content"> {/* Content wrapper for text and buttons */}
                            <div className="home-banner-heading-text"> {/* Section for the heading text */}
                                <h1 className="banner-title">Embark on Your</h1>
                                <h1 className="banner-title"><span className="highlight-text-with-yellow">Sacred Journey</span> with Ease</h1>
                                <p>Discover exclusive Umrah packages, connect with trusted agents, and book your spiritual pilgrimage with just a few clicks.</p>
                            </div>
                            <div className="home-banner-text-btn"> {/* Section for descriptive text and the action button */}
                                <p>Your trusted platform for Umrah bookings, offering tailored packages for every budget and seamless support throughout your pilgrimage.</p>
                                <Link to="/packages"> {/* Link to navigate to the packages page */}
                                    <button className="explore-pkg-btn">Explore Packages</button> {/* Call-to-action button */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner; // Exporting the HomeBanner component
