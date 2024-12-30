import React from "react";

// Functional component for the Home Sacred Journey section
const HomeSacredJourney: React.FC = () => {
    return (
        <section>
            {/* Main container for the sacred journey section */}
            <div className="home-sacred-journey">
                {/* Wrapper to centralize content within the section */}
                <div className="home-sacred-journey-container">
                    {/* Main content structure for the section */}
                    <div className="home-sacred-journey-main">
                        {/* Content area containing text, title, and button */}
                        <div className="sacred-journey-content">
                            {/* Icon with a highlight text */}
                            <div className="sacred-journey-icon-text">
                                {/* SVG for decorative purpose */}
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="44" height="44" rx="22" fill="#D4AF37" fill-opacity="0.12" />
                                    <path d="M13 32V15.9907C13 15.2578 13 14.8914 13.2039 14.6226C13.4077 14.3538 13.7601 14.2558 14.4647 14.0596L21.4647 12.1111C21.7307 12.037 21.8637 12 22 12C22.1363 12 22.2693 12.037 22.5353 12.1111L29.5353 14.0596C30.2399 14.2558 30.5923 14.3538 30.7961 14.6226C31 14.8914 31 15.2578 31 15.9907V32" stroke="#D4AF37" stroke-width="1.5" />
                                    <path d="M12 32H32" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M13 19L21.5661 17.0488C21.8519 16.9837 22.1481 16.9837 22.4339 17.0488L31 19" stroke="#D4AF37" stroke-width="1.5" />
                                    <path d="M29.65 22.7L31 23M25.6 21.8L26.5 22M22.9 21.2L22 21L21.1 21.2M14.35 22.7L13 23M18.4 21.8L17.5 22" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M22 17V32" stroke="#D4AF37" stroke-width="1.5" />
                                </svg>
                                {/* Highlighted text next to the icon */}
                                <span className="highlight-text-with-yellow">
                                    Your Sacred Journey, Our Commitment
                                </span>
                            </div>

                            {/* Title of the section */}
                            <div className="sacred-journey-title">
                                <h1>Your Sacred Journey, Our Commitment</h1>
                            </div>

                            {/* Call-to-action button */}
                            <div className="sacred-journey-btn">
                                <button className="path-to-makkah">Begin Your Path to Makkah</button>
                            </div>
                        </div>

                        {/* Right-side image container */}
                        <div className="sacred-journey-img">
                            {/* Image representing the sacred journey */}
                            <img src="./sacred-journey-img.png" alt="Sacred Journey" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSacredJourney;
