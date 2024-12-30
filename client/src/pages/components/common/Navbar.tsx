import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {

    const location = useLocation(); // Access the current location to track route changes
    const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || '/home'); // Track the currently active tab
    const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled to change navbar background

    // Check if the current route is the homepage
    const isHomePage = location.pathname.toLowerCase() === '/home';

    useEffect(() => {
        // Update the active tab when the route changes
        const currentPath = location.pathname;
        setActiveTab(currentPath);
    }, [location]);

    useEffect(() => {
        // Handle background color change on scroll only for the homepage
        if (isHomePage) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50); // Update scrolled state based on scroll position
            };

            window.addEventListener("scroll", handleScroll); // Attach scroll event listener

            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [isHomePage]);

    const handleTabClick = (tab: string) => {
        // Update the active tab and persist it in localStorage
        localStorage.setItem('activeTab', tab);
        setActiveTab(tab);
    };

    const handleMouseEnter = () => {
        // Clear the active tab on hover
        setActiveTab('');
    };

    const handleMouseLeave = () => {
        // Revert to the active tab after hover ends
        setActiveTab(location.pathname);
    };

    return (
        <section>
            {/* Dynamic class to toggle transparent or black background */}
            <nav className={`navbar ${isHomePage && !isScrolled ? 'transparent' : 'black'}`}>
                <div className="navbar-container">
                    <div className="navbar-main">
                        
                        {/* Navbar logo */}
                        <div className="navbar-logo">
                            <span>
                                <img src="/Umrah.png" alt="" />
                            </span>
                        </div>
                        <div className="navbar-items">
                            <ul className="nav-links">
                                {/* Navigation links with active state highlighting */}
                                <li
                                    className={`nav-item ${activeTab === '/home' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('/home')}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link to="/home" className="nav-item-link">Home</Link>
                                </li>
                                <li
                                    className={`nav-item ${activeTab === '/packages' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('/packages')}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link to="/packages" className="nav-item-link">Packages</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="icon-container">
                            <div className="u-icon">
                                <img src="/U-black.png" alt="Icon" />
                            </div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#FAFAF9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div className="dropdown-menu">
                                {/* Dropdown menu links */}
                                <div>
                                    <Link to="/AccountPersonalInfoPassword">
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 15.6667C3.44649 13.6021 6.08918 12.3333 9 12.3333C11.9108 12.3333 14.5535 13.6021 16.5 15.6667M12.75 5.25C12.75 7.32107 11.0711 9 9 9C6.92893 9 5.25 7.32107 5.25 5.25C5.25 3.17893 6.92893 1.5 9 1.5C11.0711 1.5 12.75 3.17893 12.75 5.25Z" stroke="#292524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Account
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/PreviousToursGroupChats">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.5 18.3332V4.99209C2.5 4.38136 2.5 4.076 2.66989 3.85201C2.83978 3.62803 3.13339 3.5463 3.72059 3.38284L9.55393 1.75906C9.77558 1.69735 9.88641 1.6665 10 1.6665C10.1136 1.6665 10.2244 1.69735 10.4461 1.75906L16.2794 3.38284C16.8666 3.5463 17.1602 3.62803 17.3301 3.85201C17.5 4.076 17.5 4.38136 17.5 4.99209V18.3332" stroke="#292524" stroke-width="1.5" />
                                            <path d="M1.66663 18.3333H18.3333" stroke="#292524" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M2.5 7.49992L9.63845 5.87393C9.87658 5.81969 10.1234 5.81969 10.3616 5.87393L17.5 7.49992" stroke="#292524" stroke-width="1.5" />
                                            <path d="M16.375 10.5832L17.5 10.8332M13 9.83317L13.75 9.99984M10.75 9.33317L10 9.1665L9.25 9.33317M3.625 10.5832L2.5 10.8332M7 9.83317L6.25 9.99984" stroke="#292524" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M10 5.83325V18.3333" stroke="#292524" stroke-width="1.5" />
                                        </svg>
                                        Previous Tours
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/Notification">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.16667 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H12.6667C14.0668 17.5 14.7669 17.5 15.3016 17.2275C15.772 16.9878 16.1545 16.6054 16.3942 16.135C16.6667 15.6002 16.6667 14.9001 16.6667 13.5V10.8333M10.8333 14.1667H5.83333M12.5 10.8333H5.83333M16.7678 3.23223C17.7441 4.20854 17.7441 5.79146 16.7678 6.76777C15.7915 7.74408 14.2085 7.74408 13.2322 6.76777C12.2559 5.79146 12.2559 4.20854 13.2322 3.23223C14.2085 2.25592 15.7915 2.25592 16.7678 3.23223Z" stroke="#292524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Notification
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/Privacy-Policy">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.55882 18.3334C6.23126 18.3334 4.56748 18.3334 3.53374 17.3571C2.5 16.3808 2.5 14.8094 2.5 11.6667L2.5 8.33341C2.5 5.19072 2.5 3.61937 3.53374 2.64306C4.56748 1.66675 6.23126 1.66675 9.55883 1.66675L10.4412 1.66675C13.7687 1.66675 15.4325 1.66675 16.4663 2.64306C17.5 3.61937 17.5 5.19072 17.5 8.33342M9.58333 18.3334H10.8333" stroke="#292524" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M6.66663 5.8335H13.3333" stroke="#292524" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M6.66663 10H10.8333" stroke="#292524" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M14.5834 15.4915L13.8316 18.1192C13.7977 18.2511 13.9283 18.3656 14.0549 18.315L15.7096 17.6542C15.789 17.6225 15.8777 17.6225 15.9572 17.6542L17.6276 18.3213C17.7512 18.3707 17.88 18.2626 17.8526 18.1326L17.2158 15.4094M18.3334 13.3294C18.3334 11.951 17.2141 10.8335 15.8334 10.8335C14.4527 10.8335 13.3334 11.951 13.3334 13.3294C13.3334 14.7079 14.4527 15.8254 15.8334 15.8254C17.2141 15.8254 18.3334 14.7079 18.3334 13.3294Z" stroke="#292524" stroke-width="1.5" stroke-linejoin="round" />
                                        </svg>
                                        Privacy Policy
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/Help-and-Support">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.57496 7.50008C7.77088 6.94314 8.15759 6.4735 8.66659 6.17436C9.17559 5.87521 9.77404 5.76586 10.3559 5.86567C10.9378 5.96549 11.4656 6.26802 11.8459 6.71969C12.2261 7.17136 12.4342 7.74302 12.4333 8.33342C12.4333 10.0001 9.93329 10.8334 9.93329 10.8334M9.99996 14.1667H10.0083M18.3333 10.0001C18.3333 14.6025 14.6023 18.3334 9.99996 18.3334C5.39759 18.3334 1.66663 14.6025 1.66663 10.0001C1.66663 5.39771 5.39759 1.66675 9.99996 1.66675C14.6023 1.66675 18.3333 5.39771 18.3333 10.0001Z" stroke="#292524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Help & Support
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/login">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5" stroke="#292524" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
