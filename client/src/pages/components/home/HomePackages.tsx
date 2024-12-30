// Importing Link for navigation and useLocation to get the current route.
import { Link, useLocation } from 'react-router-dom';

const HomePackages: React.FC = () => {
    // Get the current location object to determine the active route.
    const location = useLocation();

    // Check if the current route is '/packages'.
    const isPackagesPage = location.pathname.toLowerCase() === '/packages';

    return (
        <section>
            <div className="home-packages">
                <div className="home-packages-container">
                    <div className="home-packages-main">
                        {/* Render the title only if the current page is not '/packages' */}
                        <div className="home-packages-title" id={`${isPackagesPage ? 'hide' : ''}`}>
                            <p className="highlight-text-with-yellow">PACKAGES</p>
                            <h2>Choose the Perfect Package for Your Journey</h2>
                        </div>
                        <div className="home-packages-cards">
                            {/* Package card starts here */}
                            <div className="package-card">
                                <div className="package-card-type-img">
                                    <div className="package-type" id={`${isPackagesPage ? '' : 'hide'}`}>
                                        Fixed
                                    </div>
                                    <span>
                                        <img src="./package-img1.png" alt="pkg-img" />
                                    </span>
                                </div>
                                <div className="package-card-details">
                                    <div className="package-card-text">
                                        {/* Highlighted duration */}
                                        <span id="package-detail-duration" className="highlight-text-with-yellow">10 Nights | 11 Days</span>
                                        <h3>EXECUTIVE Umrah Packages</h3>
                                        {/* Package amount details */}
                                        <div className="pkg-amount-per-person">
                                            <span className="package-amount">4530</span> SR / <span className="highlight-text-with-yellow">person</span>
                                        </div>
                                        <p>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 10H2M11 14H6M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2Z" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Visa + Insurance
                                        </p>
                                        <p>
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 7C20 5.9 19.1 5 18 5V2C18 0.9 17.1 0 16 0H4C2.9 0 2 0.9 2 2V5C0.9 5 0 5.9 0 7V12H1.33L2 14H3L3.67 12H16.34L17 14H18L18.67 12H20V7ZM16 5H11V2H16V5ZM4 2H9V5H4V2ZM2 7H18V10H2V7Z" fill="#D4AF37" />
                                            </svg>
                                            Hotel
                                        </p>
                                        <p>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.10041 5C3.76041 5.55 3.70041 5.97 3.70041 6.38C3.70041 7.15 4.70041 9 4.70041 10C4.70041 10.95 4.30041 11.5 4.30041 11.5H2.80041C2.80041 11.5 3.20041 10.95 3.20041 10C3.20041 9 2.20041 7.15 2.20041 6.38C2.20041 5.97 2.26041 5.55 2.60041 5H4.10041ZM9.10041 5C8.76041 5.55 8.70041 5.97 8.70041 6.38C8.70041 7.15 9.70041 9 9.70041 10C9.70041 10.95 9.30041 11.5 9.30041 11.5H10.8004C10.8004 11.5 11.2004 10.95 11.2004 10C11.2004 9 10.2004 7.15 10.2004 6.38C10.2004 5.97 10.2604 5.55 10.6004 5H9.10041ZM5.85041 5C5.51041 5.55 5.45041 5.97 5.45041 6.38C5.45041 7.15 6.45041 9.01 6.45041 10C6.45041 10.95 6.05041 11.5 6.05041 11.5H7.55041C7.55041 11.5 7.95041 10.95 7.95041 10C7.95041 9 6.95041 7.15 6.95041 6.38C6.95041 5.97 7.01041 5.55 7.35041 5H5.85041ZM16.3004 0C14.7604 0 13.4904 1.16 13.3204 2.65L12.2304 13H1.71041C1.11041 13 0.620412 13.53 0.710412 14.13C1.23041 17.46 4.09041 20 7.45041 20C10.9304 20 13.7904 17.27 14.1604 13.77L15.3104 2.9C15.3604 2.39 15.7804 2 16.3004 2C16.8504 2 17.3004 2.45 17.3004 3C17.3004 3.3 17.2004 4.25 17.2004 4.25L19.1704 4.5C19.1704 4.5 19.3004 3.44 19.3004 3C19.3004 1.35 17.9504 0 16.3004 0ZM7.45041 18C5.51041 18 3.78041 16.77 3.02041 15H11.8104C11.0904 16.78 9.39041 18 7.45041 18Z" fill="#D4AF37" />
                                            </svg>
                                            Meal
                                        </p>
                                        <p>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 14V12L11.5 7V1.5C11.5 0.67 10.83 0 10 0C9.17 0 8.5 0.67 8.5 1.5V7L0 12V14L8.5 11.5V17L6 18.5V20L10 19L14 20V18.5L11.5 17V11.5L20 14Z" fill="#D4AF37" />
                                            </svg>
                                            Air Transport
                                        </p>
                                        <div className="pkg-card-add-to-compair facilities-checkbox" id={`${isPackagesPage ? '' : 'hide'}`}>
                                            <label className="custom-checkbox" htmlFor='check1'>
                                                <input type="checkbox" name="check" id="check1" />
                                                <span className="checkmark"></span>
                                                Add to Compare
                                            </label>
                                        </div>
                                    </div>
                                    <div className="package-card-details-btn">
                                        {/* Navigate to package detail page, passing image data in state */}
                                        <Link
                                            to="/packagedetail"
                                            state={{ img: "./package-img1.png" }} // Pass the image data here
                                        >
                                            <button className="learn-more">Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Duplicate the package card with a different image and content as required */}
                            <div className="package-card">
                                <div className="package-card-type-img">
                                    <div className="package-type" id={`${isPackagesPage ? '' : 'hide'}`}>
                                        Fixed
                                    </div>
                                    <span>
                                        <img src="./package-img2.png" alt="pkg-img" />
                                    </span>
                                </div>
                                <div className="package-card-details">
                                    <div className="package-card-text">
                                        <span id="package-detail-duration" className="highlight-text-with-yellow">10 Nights | 11 Days</span>
                                        <h3>EXECUTIVE Umrah Packages</h3>
                                        <div className="pkg-amount-per-person"><span className="package-amount">4530</span> SR / <span className="highlight-text-with-yellow">person</span></div>
                                        <p>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 10H2M11 14H6M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2Z" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Visa + Insurance
                                        </p>
                                        <p>
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 7C20 5.9 19.1 5 18 5V2C18 0.9 17.1 0 16 0H4C2.9 0 2 0.9 2 2V5C0.9 5 0 5.9 0 7V12H1.33L2 14H3L3.67 12H16.34L17 14H18L18.67 12H20V7ZM16 5H11V2H16V5ZM4 2H9V5H4V2ZM2 7H18V10H2V7Z" fill="#D4AF37" />
                                            </svg>
                                            Hotel
                                        </p>
                                        <p>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.10041 5C3.76041 5.55 3.70041 5.97 3.70041 6.38C3.70041 7.15 4.70041 9 4.70041 10C4.70041 10.95 4.30041 11.5 4.30041 11.5H2.80041C2.80041 11.5 3.20041 10.95 3.20041 10C3.20041 9 2.20041 7.15 2.20041 6.38C2.20041 5.97 2.26041 5.55 2.60041 5H4.10041ZM9.10041 5C8.76041 5.55 8.70041 5.97 8.70041 6.38C8.70041 7.15 9.70041 9 9.70041 10C9.70041 10.95 9.30041 11.5 9.30041 11.5H10.8004C10.8004 11.5 11.2004 10.95 11.2004 10C11.2004 9 10.2004 7.15 10.2004 6.38C10.2004 5.97 10.2604 5.55 10.6004 5H9.10041ZM5.85041 5C5.51041 5.55 5.45041 5.97 5.45041 6.38C5.45041 7.15 6.45041 9.01 6.45041 10C6.45041 10.95 6.05041 11.5 6.05041 11.5H7.55041C7.55041 11.5 7.95041 10.95 7.95041 10C7.95041 9 6.95041 7.15 6.95041 6.38C6.95041 5.97 7.01041 5.55 7.35041 5H5.85041ZM16.3004 0C14.7604 0 13.4904 1.16 13.3204 2.65L12.2304 13H1.71041C1.11041 13 0.620412 13.53 0.710412 14.13C1.23041 17.46 4.09041 20 7.45041 20C10.9304 20 13.7904 17.27 14.1604 13.77L15.3104 2.9C15.3604 2.39 15.7804 2 16.3004 2C16.8504 2 17.3004 2.45 17.3004 3C17.3004 3.3 17.2004 4.25 17.2004 4.25L19.1704 4.5C19.1704 4.5 19.3004 3.44 19.3004 3C19.3004 1.35 17.9504 0 16.3004 0ZM7.45041 18C5.51041 18 3.78041 16.77 3.02041 15H11.8104C11.0904 16.78 9.39041 18 7.45041 18Z" fill="#D4AF37" />
                                            </svg>
                                            Meal
                                        </p>
                                        <p>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 14V12L11.5 7V1.5C11.5 0.67 10.83 0 10 0C9.17 0 8.5 0.67 8.5 1.5V7L0 12V14L8.5 11.5V17L6 18.5V20L10 19L14 20V18.5L11.5 17V11.5L20 14Z" fill="#D4AF37" />
                                            </svg>
                                            Air Transport
                                        </p>
                                        <div className="pkg-card-add-to-compair facilities-checkbox" id={`${isPackagesPage ? '' : 'hide'}`}>
                                            <label className="custom-checkbox" htmlFor='check2'>
                                                <input type="checkbox" name="check" id="check2" />
                                                <span className="checkmark"></span>
                                                Add to Compare
                                            </label>
                                        </div>
                                    </div>
                                    <div className="package-card-details-btn">
                                        <Link
                                            to="/packagedetail"
                                            state={{ img: "./package-img2.png" }} // Pass the image data here
                                        >
                                            <button className="learn-more">Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="package-card">
                                <div className="package-card-type-img">
                                    <div className="package-type" id={`${isPackagesPage ? '' : 'hide'}`}>
                                        Fixed
                                    </div>
                                    <span>
                                        <img src="./package-img3.png" alt="pkg-img" />
                                    </span>
                                </div>
                                <div className="package-card-details">
                                    <div className="package-card-text">
                                        <span id="package-detail-duration" className="highlight-text-with-yellow">10 Nights | 11 Days</span>
                                        <h3>EXECUTIVE Umrah Packages</h3>
                                        <div className="pkg-amount-per-person"><span className="package-amount">4530</span> SR / <span className="highlight-text-with-yellow">person</span></div>
                                        <p>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 10H2M11 14H6M2 8.2L2 15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.07989 19 5.2 19L18.8 19C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908C22 17.4802 22 16.9201 22 15.8V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5L5.2 5C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.07989 2 8.2Z" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Visa + Insurance
                                        </p>
                                        <p>
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 7C20 5.9 19.1 5 18 5V2C18 0.9 17.1 0 16 0H4C2.9 0 2 0.9 2 2V5C0.9 5 0 5.9 0 7V12H1.33L2 14H3L3.67 12H16.34L17 14H18L18.67 12H20V7ZM16 5H11V2H16V5ZM4 2H9V5H4V2ZM2 7H18V10H2V7Z" fill="#D4AF37" />
                                            </svg>
                                            Hotel
                                        </p>
                                        <p>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.10041 5C3.76041 5.55 3.70041 5.97 3.70041 6.38C3.70041 7.15 4.70041 9 4.70041 10C4.70041 10.95 4.30041 11.5 4.30041 11.5H2.80041C2.80041 11.5 3.20041 10.95 3.20041 10C3.20041 9 2.20041 7.15 2.20041 6.38C2.20041 5.97 2.26041 5.55 2.60041 5H4.10041ZM9.10041 5C8.76041 5.55 8.70041 5.97 8.70041 6.38C8.70041 7.15 9.70041 9 9.70041 10C9.70041 10.95 9.30041 11.5 9.30041 11.5H10.8004C10.8004 11.5 11.2004 10.95 11.2004 10C11.2004 9 10.2004 7.15 10.2004 6.38C10.2004 5.97 10.2604 5.55 10.6004 5H9.10041ZM5.85041 5C5.51041 5.55 5.45041 5.97 5.45041 6.38C5.45041 7.15 6.45041 9.01 6.45041 10C6.45041 10.95 6.05041 11.5 6.05041 11.5H7.55041C7.55041 11.5 7.95041 10.95 7.95041 10C7.95041 9 6.95041 7.15 6.95041 6.38C6.95041 5.97 7.01041 5.55 7.35041 5H5.85041ZM16.3004 0C14.7604 0 13.4904 1.16 13.3204 2.65L12.2304 13H1.71041C1.11041 13 0.620412 13.53 0.710412 14.13C1.23041 17.46 4.09041 20 7.45041 20C10.9304 20 13.7904 17.27 14.1604 13.77L15.3104 2.9C15.3604 2.39 15.7804 2 16.3004 2C16.8504 2 17.3004 2.45 17.3004 3C17.3004 3.3 17.2004 4.25 17.2004 4.25L19.1704 4.5C19.1704 4.5 19.3004 3.44 19.3004 3C19.3004 1.35 17.9504 0 16.3004 0ZM7.45041 18C5.51041 18 3.78041 16.77 3.02041 15H11.8104C11.0904 16.78 9.39041 18 7.45041 18Z" fill="#D4AF37" />
                                            </svg>
                                            Meal
                                        </p>
                                        <p>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 14V12L11.5 7V1.5C11.5 0.67 10.83 0 10 0C9.17 0 8.5 0.67 8.5 1.5V7L0 12V14L8.5 11.5V17L6 18.5V20L10 19L14 20V18.5L11.5 17V11.5L20 14Z" fill="#D4AF37" />
                                            </svg>
                                            Air Transport
                                        </p>
                                        <div className="pkg-card-add-to-compair facilities-checkbox" id={`${isPackagesPage ? '' : 'hide'}`}>
                                            <label className="custom-checkbox" htmlFor='check3'>
                                                <input type="checkbox" name="check" id="check3" />
                                                <span className="checkmark"></span>
                                                Add to Compare
                                            </label>
                                        </div>
                                    </div>
                                    <div className="package-card-details-btn">
                                        <Link
                                            to="/packagedetail"
                                            state={{ img: "./package-img3.png" }} // Pass the image data here
                                        >
                                            <button className="learn-more">Learn more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* package-page-navigation to Packages page */}
                        <div className="package-page-navigation" id={`${isPackagesPage ? 'hide' : ''}`}>
                            <Link to="/packages">
                                <p>Packages</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="#1C1917" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HomePackages;
