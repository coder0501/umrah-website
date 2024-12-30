
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// To notify for the successfull completion of the payment and 
// package bought successfully
const PackageConfirmation = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <section>
            <div className="pkg-confirmation">
                {/* pkg-confirmation-container */}
                <div className="pkg-confirmation-container">
                    <div className="pkg-confirmation-main">
                        <div>
                            <div className="pkg-confirmation-img">
                                <img src="./umrah-confirmation-img.png" alt="" />
                            </div>
                            {/* pkg-confimation-notify detials */}
                            <div className="pkg-confimation-notify">
                                <p>
                                    Congratulations!
                                </p>
                                <p>
                                    Your Umrah Package is Confirmed!

                                </p>
                            </div>
                            <div className="pkg-confirmation-content">
                                <p>
                                    Your journey to the Holy Cities is now set. You’ve successfully booked your Umrah package. We’ve sent a confirmation email with all the details to your inbox.
                                </p>
                                <div className="content-links">
                                    <Link to="#">
                                        View My Booking
                                    </Link>
                                    <Link to="#">
                                        Contact Support
                                    </Link>
                                    <Link to="#">
                                        Give Feedback
                                    </Link>
                                </div>
                            </div>
                            <div className="umrah-travel-grp">
                                <div className="umrah-travel-grp-img-text">
                                    <div className="umrah-travel-grp-img">
                                        <span>
                                            <img src="./grp-img1.png" alt="" />
                                            <img src="./grp-img2.png" alt="" />
                                            <img src="./grp-img3.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="umrah-travel-grp-text">
                                        <p>
                                            Join Your Umrah Travel Group.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button className="snd-request-btn">
                                        Send Request to Join
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PackageConfirmation;