import React, { useRef } from "react";
import { Link } from "react-router-dom";

// array to show testimonials 
const testimonials = [
    {
        name: "Ahmad Al-mansour",
        location: "India, Indore",
        stars: 5,
        text: "This platform made my first Umrah journey incredibly smooth and stress-free. The packages were well-curated, and the booking process was simple.",
    },
    {
        name: "Ahmad Al-mansour",
        location: "India, Indore",
        stars: 5,
        text: "This platform made my first Umrah journey incredibly smooth and stress-free. The packages were well-curated, and the booking process was simple.",
    },
    {
        name: "Ahmad Al-mansour",
        location: "India, Indore",
        stars: 5,
        text: "This platform made my first Umrah journey incredibly smooth and stress-free. The packages were well-curated, and the booking process was simple.",
    },
    {
        name: "Ahmad Al-mansour",
        location: "India, Indore",
        stars: 5,
        text: "This platform made my first Umrah journey incredibly smooth and stress-free. The packages were well-curated, and the booking process was simple.",
    },
    // Add more testimonials as needed
];


// array to show the packages detials
const allPackages = [
    {
        type: "Flexible",
        title: "EXECUTIVE Umrah Packages",
        content: "For 10 Night & 11 Days"
    },
    {
        type: "Flexible",
        title: "EXECUTIVE Umrah Packages",
        content: "For 10 Night & 11 Days"
    },
    {
        type: "Flexible",
        title: "EXECUTIVE Umrah Packages",
        content: "For 10 Night & 11 Days"
    },
    {
        type: "Flexible",
        title: "EXECUTIVE Umrah Packages",
        content: "For 10 Night & 11 Days"
    },
];

// AgentsTestimonialsInfo component with carousel effect
const AgentsTestimonialsInfo: React.FC = () => {

    const testimonialsCarouselRef = useRef(null);
    const allPackagesCarouselRef = useRef(null);

    const scrollTestimonialsLeft = () => {
        testimonialsCarouselRef.current.scrollBy({
            top: 0,
            left: -testimonialsCarouselRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollTestimonialsRight = () => {
        testimonialsCarouselRef.current.scrollBy({
            top: 0,
            left: testimonialsCarouselRef.current.clientWidth,
            behavior: "smooth",
        });
    };


    const scrollLeft = () => {
        allPackagesCarouselRef.current.scrollBy({
            top: 0,
            left: -allPackagesCarouselRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        allPackagesCarouselRef.current.scrollBy({
            top: 0,
            left: allPackagesCarouselRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    return (
        <section>
            <div className="agent-testimonial-info">
                {/* agent-testimonial-container */}
                <div className="agent-testimonial-container">
                    <div className="agent-testimonial-main">
                        <div className="agent-info">
                            <div className="agent-info-main">
                                <div className="agent-info-img-contact">
                                    {/* agent image */}
                                    <div className="agent-info-img">
                                        <span>
                                            <img src="./agent-info-img.png" alt="" />
                                        </span>
                                    </div>
                                    {/* agent details */}
                                    <div className="agent-contact-info">
                                        <div className="agent-name-title">
                                            <p>
                                                Agent & your Host
                                            </p>
                                            <p>Md. Sharifsudeen kalf</p>
                                        </div>
                                        <div className="agent-contact-details">
                                            <p>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.3851 5.979C12.0339 6.10503 12.6303 6.42096 13.0978 6.88636C13.5653 7.35175 13.8826 7.94544 14.0092 8.59143M11.3851 3.3335C12.7332 3.48259 13.9903 4.08361 14.9501 5.03786C15.9098 5.99212 16.5151 7.24289 16.6666 8.58481M8.84527 11.1794C8.04701 10.3847 7.41669 9.48617 6.95431 8.52742C6.91454 8.44496 6.89465 8.40373 6.87937 8.35155C6.82508 8.16613 6.86408 7.93845 6.97702 7.78141C7.00881 7.73723 7.04678 7.69943 7.12272 7.62382C7.35498 7.3926 7.47111 7.27699 7.54703 7.16074C7.83336 6.72232 7.83336 6.15712 7.54703 5.7187C7.47111 5.60244 7.35498 5.48683 7.12272 5.25561L6.99326 5.12673C6.6402 4.77525 6.46367 4.59951 6.27408 4.50404C5.89703 4.31418 5.45174 4.31418 5.07468 4.50404C4.88509 4.59951 4.70856 4.77525 4.3555 5.12673L4.25078 5.23099C3.89893 5.58127 3.723 5.75641 3.58864 5.99452C3.43955 6.25875 3.33235 6.66912 3.33326 6.97218C3.33407 7.24529 3.38729 7.43195 3.49372 7.80526C4.0657 9.81147 5.14491 11.7046 6.73134 13.2839C8.31778 14.8633 10.2194 15.9377 12.2346 16.5071C12.6096 16.613 12.7971 16.666 13.0714 16.6668C13.3758 16.6677 13.788 16.561 14.0534 16.4126C14.2926 16.2788 14.4686 16.1037 14.8204 15.7534L14.9251 15.6491C15.2782 15.2977 15.4547 15.1219 15.5506 14.9332C15.7413 14.5578 15.7413 14.1145 15.5506 13.7391C15.4547 13.5504 15.2782 13.3747 14.9251 13.0232L14.7957 12.8943C14.5634 12.6631 14.4473 12.5475 14.3305 12.4719C13.8901 12.1868 13.3224 12.1868 12.882 12.4719C12.7652 12.5475 12.6491 12.6631 12.4168 12.8943C12.3409 12.9699 12.3029 13.0077 12.2585 13.0393C12.1008 13.1518 11.8721 13.1906 11.6858 13.1365C11.6334 13.1213 11.592 13.1015 11.5092 13.0619C10.5461 12.6016 9.64353 11.9741 8.84527 11.1794Z" stroke="#007AFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                +971 55 327 9516
                                            </p>
                                            <p>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.75 6.875L8.85307 10.4472C9.26631 10.7364 9.47292 10.881 9.69766 10.9371C9.89618 10.9866 10.1038 10.9866 10.3023 10.9371C10.5271 10.881 10.7337 10.7364 11.1469 10.4472L16.25 6.875M6.75 15H13.25C14.3001 15 14.8251 15 15.2262 14.7956C15.579 14.6159 15.8659 14.329 16.0456 13.9762C16.25 13.5751 16.25 13.0501 16.25 12V8C16.25 6.9499 16.25 6.42485 16.0456 6.02377C15.8659 5.67096 15.579 5.38413 15.2262 5.20436C14.8251 5 14.3001 5 13.25 5H6.75C5.6999 5 5.17485 5 4.77377 5.20436C4.42096 5.38413 4.13413 5.67096 3.95436 6.02377C3.75 6.42485 3.75 6.9499 3.75 8V12C3.75 13.0501 3.75 13.5751 3.95436 13.9762C4.13413 14.329 4.42096 14.6159 4.77377 14.7956C5.17485 15 5.6999 15 6.75 15Z" stroke="#007AFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                sharifsudeen@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* agent capabilities such as rating, review and total packages */}
                                <div className="agent-capabilites">
                                    <div className="agent-capabilites-main">
                                        <div className="agent-capability-item">
                                            <p>Rating</p>
                                            <div>
                                                <span>
                                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_2055_2721)">
                                                            <path d="M10.3717 1.60996C10.5425 1.19932 11.1242 1.19932 11.295 1.60996L13.3611 6.57744C13.4331 6.75056 13.5959 6.86885 13.7828 6.88383L19.1456 7.31376C19.589 7.3493 19.7687 7.90256 19.431 8.19189L15.3451 11.6919C15.2027 11.8139 15.1405 12.0053 15.184 12.1876L16.4323 17.4208C16.5355 17.8534 16.0649 18.1954 15.6853 17.9635L11.094 15.1592C10.934 15.0615 10.7328 15.0615 10.5727 15.1592L5.98143 17.9635C5.60188 18.1954 5.13126 17.8534 5.23445 17.4208L6.48276 12.1876C6.52626 12.0053 6.46408 11.8139 6.32168 11.6919L2.23579 8.19189C1.89802 7.90256 2.07778 7.3493 2.52111 7.31376L7.88392 6.88383C8.07081 6.86885 8.23362 6.75056 8.30562 6.57744L10.3717 1.60996Z" fill="#D4AF37" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_2055_2721">
                                                                <rect width="20" height="20" fill="white" transform="translate(0.833374)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </span>
                                                <span>3.5</span>
                                            </div>
                                        </div>
                                        <div className="agent-capability-item">
                                            <div>
                                                <p>
                                                    Reviews
                                                </p>
                                                <span>
                                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 9L5 5L1 1" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <span>32</span>
                                        </div>
                                        <div className="agent-capability-item">
                                            <div>
                                                <p>Total packages</p>
                                                <span>
                                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 9L5 5L1 1" stroke="#D4AF37" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <span>12</span>
                                        </div>
                                    </div>
                                    <div className="agent-capabilites-content">
                                        <p> Hi, I'm Anil from the award-winning StayVista, with a heart as vast as the peaks around me. My love for food is steeped in Uttarakhand's flavors. Hosting allows me to share favorite trails and spots, ensuring an adventurous stay. Music resonates through my soul, echoing mountain melodies. Let's share a meal, swap travel tales, and let Uttarakhand's sounds be your stay's soundtrack.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Umrah testimonials component */}
                        <div className="testimonials-info">
                            <div className="testimonials-info-container">
                                <div className="testimonials-info-main">
                                    <div className="testimonials-title_header">
                                        <div className="testimonials-carousel-header">
                                            <div className="carousel-header-title">
                                                <span className="testimonials-reviews">
                                                    <p>Reviews</p>
                                                    <Link to="#">
                                                        Write a Review
                                                    </Link>
                                                </span>
                                            </div>
                                            <div className="carousel-btn-controls">
                                                <div className="carousel-controls">
                                                    <button className="arrow-button" onClick={scrollTestimonialsLeft}>
                                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 9L1 5L5 1" stroke="#1C1917" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <button className="arrow-button" onClick={scrollTestimonialsRight}>
                                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 9L5 5L1 1" stroke="#1C1917" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-carousel-container" ref={testimonialsCarouselRef}>
                                        {testimonials.map((testimonial, index) => (
                                            <div key={index} className="testimonial-card">
                                                <div className="card-header">
                                                    <div>
                                                        <div className="stars">
                                                            {Array.from({ length: testimonial.stars }, (_, i) => (
                                                                <span key={i}>&#9733;</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="testimonial-text">{testimonial.text}</p>
                                                </div>
                                                <div className="testimonial_img">
                                                    <img src="./testimonials-img.png" alt="testimonial_img" />
                                                    <h4>{testimonial.name}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Umrah All Packages */}
                        <div className="all-packages-info">
                            <div className="testimonials-info">
                                <div className="testimonials-info-container">
                                    <div className="testimonials-info-main">
                                        <div className="testimonials-title_header">
                                            <div className="testimonials-carousel-header">
                                                <div className="carousel-header-title">
                                                    <span className="testimonials-reviews">
                                                        All Packages
                                                    </span>
                                                </div>
                                                <div className="carousel-btn-controls">
                                                    <div className="carousel-controls">
                                                        <button className="arrow-button" onClick={scrollLeft}>
                                                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 9L1 5L5 1" stroke="#1C1917" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                        <button className="arrow-button" onClick={scrollRight}>
                                                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 9L5 5L1 1" stroke="#1C1917" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* all-pkg-img */}
                                        <div className="allPackages-carousel-container" ref={allPackagesCarouselRef}>
                                            {allPackages.map((pkg, index) => (
                                                <div key={index} className="allPackages-card">
                                                    <div className="allPackages-card-type">
                                                        <p>{pkg.type}</p>
                                                    </div>
                                                    <div className="allPackages-card-title-content">
                                                        <p>{pkg.title}</p>
                                                        <p>{pkg.content}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgentsTestimonialsInfo;