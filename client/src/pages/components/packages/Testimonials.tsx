import React, { useRef } from "react";
// import "./Testimonials.css";


// testimonials array to show the testimony
const testimonials = [
    {
        name: "Ahmad Al-mansour",
        location: "India, Indore",
        stars: 5,
        text: "Codemeg's training was a game-changer for me. The hands-on projects and real-world insights helped me transition smoothly from college to a fulfilling career in marketing. I couldn’t have asked for better guidance and support!",
    },
    {
        name: "Ahmad Al-mansour",
        location: "India, Indore",
        stars: 5,
        text: "Codemeg's training was a game-changer for me. The hands-on projects and real-world insights helped me transition smoothly from college to a fulfilling career in marketing. I couldn’t have asked for better guidance and support!",
    },
    {
        name: "Ahmad Al-mansour",
        location: "India, Indore",
        stars: 5,
        text: "Codemeg's training was a game-changer for me. The hands-on projects and real-world insights helped me transition smoothly from college to a fulfilling career in marketing. I couldn’t have asked for better guidance and support!",
    },
    {
        name: "Ahmad Al-mansour",
        location: "India, Indore",
        stars: 5,
        text: "Codemeg's training was a game-changer for me. The hands-on projects and real-world insights helped me transition smoothly from college to a fulfilling career in marketing. I couldn’t have asked for better guidance and support!",
    },
    // Add more testimonials as needed
];

const Testimonials = () => {
    const carouselRef = useRef(null);

    const scrollTestimonialsLeft = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: -carouselRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    const scrollTestimonialsRight = () => {
        carouselRef.current.scrollBy({
            top: 0,
            left: carouselRef.current.clientWidth,
            behavior: "smooth",
        });
    };

    return (
        <section>
            <div className="umrah-testimonials">
                {/* umrah-testimonials-carousel-container with carousle effect */}
                <div className="umrah-testimonials-carousel-container">
                    <div className="umrah-testimonials-carousel-main">
                        <div className="testimonials-title_header">
                            <div className="carousel-header">
                                <div className="carousel-header-heading">
                                    <span className="total-reviews">
                                        Reviews
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
                        <div className="umrah-testimonial-carousel-container" ref={carouselRef}>
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
        </section>
    );
};

export default Testimonials;


















// import left_arrow from "../../../assets/images/left-arrow-icon.svg";
// import right_arrow from "../../../assets/images/right-arrow-icon.svg";
// // import profileIcon from "../assets/images/profile-icon.png";
// import testimonial_img from "../../../assets/images/testimonial_img.png";