import React from 'react';

// ItineraryItem for typescript
interface ItineraryItem {
    day: string;
    date: string;
    description: string[];
}

// Itinerary compoenent
const Itinerary: React.FC = () => {
    const itinerary = [
        {
            day: 'DAY 1',
            date: '06 Oct',
            description: [
                'The group will jet off to Jeddah. Private car will transport to Mecca hotel. After accessing the hotel and checking in, the group will prepare for Umrah',
            ],
        },
        {
            day: 'DAY 2',
            date: '07 Oct',
            description: [
                'Set off for Haram Sharif',
            ],
        },
        {
            day: 'DAY 2',
            date: '07 Oct',
            description: [
                'Ziyarat at local shrines in the supervision of tour guide',
            ],
        },
        {
            day: 'DAY 2',
            date: '07 Oct',
            description: [
                'Offer prayers at Haram Sharif',
            ],
        },
        {
            day: 'DAY 2',
            date: '07 Oct',
            description: [
                'Visit Haram sharif and perform 2nd Umrah at Masjid Asha with assistance of tour guide but pilgrims have to manage their own transportation'
            ],
        },
        {
            day: 'DAY 2',
            date: '07 Oct',
            description: [
                'Perform 3rd Umrah and visit Masjid Asha but pilgrims have to manage their own transportation',
            ],
        }
    ];

    return (
        <section className='itinerary-section'>
            <div className="compare-packages">
                {/* compare-packages title */}
                <div className="compare-packages-title">
                    <h2>Compare package</h2>
                </div>

                <div className="compare-packages-items">
                    <div className="compare-packages-item">
                        <div className="compare-packages-item-img">
                            <span>
                                <img src="./compare-pkg-img.png" alt="compare-pkg-img" />
                            </span>
                        </div>
                        {/* compare-packages duration */}
                        <div className="compare-packages-item-title-duration">
                            <div className="compare-packages-item-title">
                                <h3>EXECUTIVE Umrah Packages</h3>
                            </div>
                            <div className="compare-packages-item-duration">
                                <div className="package-duration-item">
                                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M2 9.00016C2 5.32516 4.99167 2.3335 8.66667 2.3335C8.95 2.3335 9.23333 2.35016 9.50833 2.39183C7.91667 4.19183 7 6.54183 7 9.00016C7 11.4585 7.91667 13.8085 9.50833 15.6085C9.23333 15.6502 8.95 15.6668 8.66667 15.6668C4.99167 15.6668 2 12.6752 2 9.00016Z" fill="#D4AF37" />
                                        <path d="M8.66671 9.00008C8.66671 5.91675 10.3417 3.23341 12.8334 1.79175C11.6084 1.08341 10.1834 0.666748 8.66671 0.666748C4.06671 0.666748 0.333374 4.40008 0.333374 9.00008C0.333374 13.6001 4.06671 17.3334 8.66671 17.3334C10.1834 17.3334 11.6084 16.9167 12.8334 16.2084C10.3417 14.7667 8.66671 12.0834 8.66671 9.00008ZM9.50837 15.6084C9.23337 15.6501 8.95004 15.6667 8.66671 15.6667C4.99171 15.6667 2.00004 12.6751 2.00004 9.00008C2.00004 5.32508 4.99171 2.33341 8.66671 2.33341C8.95004 2.33341 9.23337 2.35008 9.50837 2.39175C7.91671 4.19175 7.00004 6.54175 7.00004 9.00008C7.00004 11.4584 7.91671 13.8084 9.50837 15.6084Z" fill="#D4AF37" />
                                    </svg>
                                    <p className="package-duration-nights">14 Nights</p>
                                </div>
                                <div className="package-duration-item">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 7.49992C11.375 7.49992 12.5 8.62492 12.5 9.99992C12.5 11.3749 11.375 12.4999 10 12.4999C8.62504 12.4999 7.50004 11.3749 7.50004 9.99992C7.50004 8.62492 8.62504 7.49992 10 7.49992ZM10 5.83325C7.70004 5.83325 5.83337 7.69992 5.83337 9.99992C5.83337 12.2999 7.70004 14.1666 10 14.1666C12.3 14.1666 14.1667 12.2999 14.1667 9.99992C14.1667 7.69992 12.3 5.83325 10 5.83325ZM1.66671 10.8333H3.33337C3.79171 10.8333 4.16671 10.4583 4.16671 9.99992C4.16671 9.54158 3.79171 9.16658 3.33337 9.16658H1.66671C1.20837 9.16658 0.833374 9.54158 0.833374 9.99992C0.833374 10.4583 1.20837 10.8333 1.66671 10.8333ZM16.6667 10.8333H18.3334C18.7917 10.8333 19.1667 10.4583 19.1667 9.99992C19.1667 9.54158 18.7917 9.16658 18.3334 9.16658H16.6667C16.2084 9.16658 15.8334 9.54158 15.8334 9.99992C15.8334 10.4583 16.2084 10.8333 16.6667 10.8333ZM9.16671 1.66659V3.33325C9.16671 3.79158 9.54171 4.16658 10 4.16658C10.4584 4.16658 10.8334 3.79158 10.8334 3.33325V1.66659C10.8334 1.20825 10.4584 0.833252 10 0.833252C9.54171 0.833252 9.16671 1.20825 9.16671 1.66659ZM9.16671 16.6666V18.3333C9.16671 18.7916 9.54171 19.1666 10 19.1666C10.4584 19.1666 10.8334 18.7916 10.8334 18.3333V16.6666C10.8334 16.2083 10.4584 15.8333 10 15.8333C9.54171 15.8333 9.16671 16.2083 9.16671 16.6666ZM4.99171 3.81658C4.66671 3.49159 4.13337 3.49159 3.81671 3.81658C3.49171 4.14158 3.49171 4.67492 3.81671 4.99158L4.70004 5.87492C5.02504 6.19992 5.55837 6.19992 5.87504 5.87492C6.19171 5.54992 6.20004 5.01658 5.87504 4.69992L4.99171 3.81658ZM15.3 14.1249C14.975 13.7999 14.4417 13.7999 14.125 14.1249C13.8 14.4499 13.8 14.9833 14.125 15.2999L15.0084 16.1833C15.3334 16.5083 15.8667 16.5083 16.1834 16.1833C16.5084 15.8583 16.5084 15.3249 16.1834 15.0083L15.3 14.1249ZM16.1834 4.99158C16.5084 4.66658 16.5084 4.13325 16.1834 3.81658C15.8584 3.49159 15.325 3.49159 15.0084 3.81658L14.125 4.69992C13.8 5.02492 13.8 5.55825 14.125 5.87492C14.45 6.19159 14.9834 6.19992 15.3 5.87492L16.1834 4.99158ZM5.87504 15.2999C6.20004 14.9749 6.20004 14.4416 5.87504 14.1249C5.55004 13.7999 5.01671 13.7999 4.70004 14.1249L3.81671 15.0083C3.49171 15.3333 3.49171 15.8666 3.81671 16.1833C4.14171 16.4999 4.67504 16.5083 4.99171 16.1833L5.87504 15.2999Z" fill="#D4AF37" />
                                    </svg>
                                    <p>15 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="compare-packages-item">
                        <div className="compare-packages-item-img">
                            <span>
                                <img src="./compare-pkg-img.png" alt="compare-pkg-img" />
                            </span>
                        </div>
                        <div className="compare-packages-item-title-duration">
                            <div className="compare-packages-item-title">
                                <h3>EXECUTIVE Umrah Packages</h3>
                            </div>
                            <div className="compare-packages-item-duration">
                                <div className="package-duration-item">
                                    <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3" d="M2 9.00016C2 5.32516 4.99167 2.3335 8.66667 2.3335C8.95 2.3335 9.23333 2.35016 9.50833 2.39183C7.91667 4.19183 7 6.54183 7 9.00016C7 11.4585 7.91667 13.8085 9.50833 15.6085C9.23333 15.6502 8.95 15.6668 8.66667 15.6668C4.99167 15.6668 2 12.6752 2 9.00016Z" fill="#D4AF37" />
                                        <path d="M8.66671 9.00008C8.66671 5.91675 10.3417 3.23341 12.8334 1.79175C11.6084 1.08341 10.1834 0.666748 8.66671 0.666748C4.06671 0.666748 0.333374 4.40008 0.333374 9.00008C0.333374 13.6001 4.06671 17.3334 8.66671 17.3334C10.1834 17.3334 11.6084 16.9167 12.8334 16.2084C10.3417 14.7667 8.66671 12.0834 8.66671 9.00008ZM9.50837 15.6084C9.23337 15.6501 8.95004 15.6667 8.66671 15.6667C4.99171 15.6667 2.00004 12.6751 2.00004 9.00008C2.00004 5.32508 4.99171 2.33341 8.66671 2.33341C8.95004 2.33341 9.23337 2.35008 9.50837 2.39175C7.91671 4.19175 7.00004 6.54175 7.00004 9.00008C7.00004 11.4584 7.91671 13.8084 9.50837 15.6084Z" fill="#D4AF37" />
                                    </svg>
                                    <p className="package-duration-nights">14 Nights</p>
                                </div>
                                <div className="package-duration-item">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 7.49992C11.375 7.49992 12.5 8.62492 12.5 9.99992C12.5 11.3749 11.375 12.4999 10 12.4999C8.62504 12.4999 7.50004 11.3749 7.50004 9.99992C7.50004 8.62492 8.62504 7.49992 10 7.49992ZM10 5.83325C7.70004 5.83325 5.83337 7.69992 5.83337 9.99992C5.83337 12.2999 7.70004 14.1666 10 14.1666C12.3 14.1666 14.1667 12.2999 14.1667 9.99992C14.1667 7.69992 12.3 5.83325 10 5.83325ZM1.66671 10.8333H3.33337C3.79171 10.8333 4.16671 10.4583 4.16671 9.99992C4.16671 9.54158 3.79171 9.16658 3.33337 9.16658H1.66671C1.20837 9.16658 0.833374 9.54158 0.833374 9.99992C0.833374 10.4583 1.20837 10.8333 1.66671 10.8333ZM16.6667 10.8333H18.3334C18.7917 10.8333 19.1667 10.4583 19.1667 9.99992C19.1667 9.54158 18.7917 9.16658 18.3334 9.16658H16.6667C16.2084 9.16658 15.8334 9.54158 15.8334 9.99992C15.8334 10.4583 16.2084 10.8333 16.6667 10.8333ZM9.16671 1.66659V3.33325C9.16671 3.79158 9.54171 4.16658 10 4.16658C10.4584 4.16658 10.8334 3.79158 10.8334 3.33325V1.66659C10.8334 1.20825 10.4584 0.833252 10 0.833252C9.54171 0.833252 9.16671 1.20825 9.16671 1.66659ZM9.16671 16.6666V18.3333C9.16671 18.7916 9.54171 19.1666 10 19.1666C10.4584 19.1666 10.8334 18.7916 10.8334 18.3333V16.6666C10.8334 16.2083 10.4584 15.8333 10 15.8333C9.54171 15.8333 9.16671 16.2083 9.16671 16.6666ZM4.99171 3.81658C4.66671 3.49159 4.13337 3.49159 3.81671 3.81658C3.49171 4.14158 3.49171 4.67492 3.81671 4.99158L4.70004 5.87492C5.02504 6.19992 5.55837 6.19992 5.87504 5.87492C6.19171 5.54992 6.20004 5.01658 5.87504 4.69992L4.99171 3.81658ZM15.3 14.1249C14.975 13.7999 14.4417 13.7999 14.125 14.1249C13.8 14.4499 13.8 14.9833 14.125 15.2999L15.0084 16.1833C15.3334 16.5083 15.8667 16.5083 16.1834 16.1833C16.5084 15.8583 16.5084 15.3249 16.1834 15.0083L15.3 14.1249ZM16.1834 4.99158C16.5084 4.66658 16.5084 4.13325 16.1834 3.81658C15.8584 3.49159 15.325 3.49159 15.0084 3.81658L14.125 4.69992C13.8 5.02492 13.8 5.55825 14.125 5.87492C14.45 6.19159 14.9834 6.19992 15.3 5.87492L16.1834 4.99158ZM5.87504 15.2999C6.20004 14.9749 6.20004 14.4416 5.87504 14.1249C5.55004 13.7999 5.01671 13.7999 4.70004 14.1249L3.81671 15.0083C3.49171 15.3333 3.49171 15.8666 3.81671 16.1833C4.14171 16.4999 4.67504 16.5083 4.99171 16.1833L5.87504 15.2999Z" fill="#D4AF37" />
                                    </svg>
                                    <p>15 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* compare packages compare and remove buttons */}
                <div className="compare-packages-btns">
                    <div className="compare-packages-btn-item">
                        <button className="pkg-remove-all-btn">
                            Remove All
                        </button>
                    </div>
                    <div className="compare-packages-btn-item">
                        <button className="pkg-compare-btn">
                            Compare
                        </button>
                    </div>
                </div>
            </div>

            <div className="itinerary">
                {/* itinerary-container */}
                <div className='itinerary-container'>
                    <div className='itinerary-title'>
                        <h2 className="itinerary-title">ITINERARY</h2>
                    </div>
                    <div>
                        <ul className="itinerary-timeline">
                            {itinerary.map((item, index) => (
                                <li key={index} className="itinerary-timeline-item">
                                    <div className="itinerary-timeline-content">
                                        <div className="itinerary-timeline-day-date">
                                            <span className="itinerary-timeline-day">{item.day}</span>
                                            <span className="itinerary-timeline-date">{item.date}</span>
                                        </div>
                                        <div className="timeline-description">
                                            {item.description.map((desc, idx) => (
                                                <p key={idx}>{desc}</p>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Itinerary;
