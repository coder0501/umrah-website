import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdCalendarToday } from 'react-icons/md';
import { format } from 'date-fns';
import { addUser } from '../api/userApi';
import { processPayment } from '../api/paymentApi';

// Separate components for personal info and payment sections
const PersonalInfo: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        dob: '',
        gender: 'Male',
        address: '',
        termsAccepted: false,
        subscribeNewsletter: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addUser(formData);
            alert("User information saved.");
        } catch (error) {
            console.error("Error saving user info:", error);
        }
    };

    return (
        <div>
            <div className="personal-info-form">
                {/* personal-info-form details */}
                <div className="personal-info-form-fields">
                    <form className="form-details" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="form-field two-fields-row">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    className="input-field"
                                />
                            </div>
                            <div className="form-field two-fields-row">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    className="input-field"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-field">
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+318 3366 494 955"
                                    className="input-field"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="abc@gmail.com"
                                    className="input-field"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-field two-fields-row">
                                <label>DOB</label>
                                <input
                                    type="text"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    placeholder="MM/DD/YYYY"
                                    className="input-field"
                                />
                            </div>
                            <div className="form-field two-fields-row">
                                <label>Gender</label>
                                <select name="gender" value={formData.gender} onChange={handleChange} className="input-field">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-field">
                                <label>Full Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="4140 Parker Rd. Allentown, New Mexico 31134"
                                    className="input-field"
                                />
                            </div>
                        </div>

                        <div className="checkbox-group">
                            {/* <input
                                type="checkbox"
                                name="termsAccepted"
                                checked={formData.termsAccepted}
                                onChange={handleChange}
                                className="input-field"
                            /> */}
                            <label className="custom-checkbox" htmlFor='termsAccepted'>
                                <input type="checkbox"
                                    onChange={handleChange}
                                    name="check"
                                    id="termsAccepted"
                                    className="input-field"
                                />
                                <span className="checkmark"></span>
                                I agree to the Terms and Conditions of the travel service
                            </label>
                            {/* <label></label> */}
                        </div>

                        <div className="checkbox-group">
                            <label className="custom-checkbox" htmlFor='subscribeNewsletter'>
                                <input type="checkbox"
                                    onChange={handleChange}
                                    name="check"
                                    id="subscribeNewsletter"
                                    className="input-field"
                                />
                                <span className="checkmark"></span>
                                I would like to receive newsletters and promotional materials.
                            </label>
                        </div>
                        <div className="save-next-btn">
                            <button type="submit" className="submit-button">
                                Save & next
                            </button>
                        </div>
                    </form>

                </div>
            </div >
        </div >
    );
};



interface PaymentFormData {
    paymentMethod: 'creditCard' | 'upi' | 'paypal';
    cardHolderName: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    saveCard: boolean;
}

// Payment component
const Payment: React.FC = () => {

    const [paymentData, setPaymentData] = useState<PaymentFormData>({
        paymentMethod: 'creditCard',
        cardHolderName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        saveCard: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await processPayment(paymentData);
            alert(response.message);
        } catch (error) {
            console.error("Payment error:", error);
        }
    };

    return (
        <div>
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="payment-methods">
                    <label className="payment-option">
                        <div className="payment-option-img">
                            <span>
                                <img src="/Visa.png" alt="Visa Logo" />
                                <p>Credit Card</p>
                            </span>
                        </div>
                        <div className="select-payment-method">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="creditCard"
                                checked={paymentData.paymentMethod === 'creditCard'}
                                onChange={handleChange}
                            />
                        </div>
                    </label>

                    <label className="payment-option">
                        <div className="payment-option-img">
                            <span>
                                <img src="/GooglePay.png" alt="UPI Logo" />
                                <p>UPI</p>
                            </span>
                        </div>
                        <div className="select-payment-method">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="upi"
                                checked={paymentData.paymentMethod === 'upi'}
                                onChange={handleChange}
                            />
                        </div>
                    </label>

                    <label className="payment-option">
                        <div className="payment-option-img">
                            <span>
                                <img src="/PayPal.png" alt="PayPal Logo" />
                                <p>PayPal</p>
                            </span>
                        </div>
                        <div className="select-payment-method">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentData.paymentMethod === 'paypal'}
                                onChange={handleChange}
                            />
                        </div>
                    </label>
                </div>

                {paymentData.paymentMethod === 'creditCard' && (
                    <>
                        <div className="form-group">
                            <div className="form-field">
                                <label>Card Holder Name</label>
                                <input
                                    type="text"
                                    name="cardHolderName"
                                    value={paymentData.cardHolderName}
                                    onChange={handleChange}
                                    placeholder="Enter name here"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="form-field">
                                <label>Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={paymentData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="0000 0000 0000 0000"
                                />
                            </div>
                        </div>


                        <div className="form-group">
                            <div className="form-field">
                                <label>Expiration Date</label>
                                <input
                                    type="text"
                                    name="expirationDate"
                                    value={paymentData.expirationDate}
                                    onChange={handleChange}
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div className="form-field">

                                <label>CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={paymentData.cvv}
                                    onChange={handleChange}
                                    placeholder="..."
                                />
                            </div>
                        </div>


                        <div className="checkbox-group">
                            <label className="custom-checkbox" htmlFor='SaveCards'>
                                <input type="checkbox"
                                    onChange={handleChange}
                                    name="check"
                                    id="SaveCards"
                                    className="input-field"
                                />
                                <span className="checkmark"></span>
                                Save card securely for further payments
                            </label>
                        </div>
                    </>
                )}

                <div className="form-actions">
                    <button type="button" className="cancel-button">
                        Cancel
                    </button>

                    <button type="submit" className="submit-button">
                        <Link to="/successfullcompleted">
                            Make payment
                        </Link>
                    </button>
                </div>
            </form>
        </div >
    );
};

// PersonalDetail compoenent with payment and personla info tabs
const PersonalDetail: React.FC = () => {

    //  state to identofy the active tabs
    const [activeTab, setActiveTab] = useState<'personal' | 'payment'>('personal');

    const handleTabClick = (tab: 'personal' | 'payment') => {
        setActiveTab(tab);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <section>
            <div className="personal-info">
                {/* personal-info-container */}
                <div className="personal-info-container">
                    <div className="personal-info-main">
                        {/* back-btn to navigate to package detial page */}
                        <div className="back-btn">
                            <Link to="/PackageDetail" className="personal-info-back-btn">
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#1C1917" />
                                    </svg>
                                </span>
                                <div>
                                    <h1>Back</h1>
                                </div>
                            </Link>
                        </div>
                        <div className="personal-info-form-pkg">
                            <div className="tabs-container">
                                <div className="personal-info-payment-tabs">
                                    <button
                                        className={`personal-info-heading ${activeTab === 'personal' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('personal')}
                                    >
                                        Personal Info
                                    </button>
                                    <span>
                                        <svg
                                            width="8"
                                            height="14"
                                            viewBox="0 0 8 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1 13L7 7L1 1"
                                                stroke="#78716C"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <button
                                        className={`personal-info-payment ${activeTab === 'payment' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('payment')}
                                    >
                                        Payment
                                    </button>
                                </div>

                                <div className="tab-content">
                                    {activeTab === 'personal' && <PersonalInfo />}
                                    {activeTab === 'payment' && <Payment />}
                                </div>
                            </div>

                            <div className="personal-info-pkg">
                                <div className="personal-info-pkg-main">
                                    <div className="personal-info-pkg-title">
                                        <h3>Selected Package</h3>
                                    </div>

                                    <div className="selected-pkg-img">
                                        <div className="package-type" id="">Fixed</div>
                                        <img src="./package-img1.png" alt="" />
                                    </div>

                                    <div className="package-agent-name-image">
                                        <span>
                                            <img src="./pkg-agent-img.png" alt="" />
                                        </span>
                                        <div className="package-agent-name">
                                            <p>
                                                Agent
                                            </p>
                                            <p>
                                                Md. Sharifsudeen kalf
                                            </p>
                                        </div>
                                    </div>

                                    <div className="personal-info-title-duration">
                                        <h2>
                                            EXECUTIVE Umrah Packages
                                        </h2>
                                        <p>
                                            10 Nights | 11 Days
                                        </p>
                                    </div>

                                    <div className="selected-pkg-dates">
                                        <div className="pkg-dates-title">
                                            <h3>Date</h3>
                                        </div>
                                        <div className="selected-dates">
                                            <MdCalendarToday className="calendar-icon" />
                                            <span className="date-display">
                                                {format('16 Jan 2024', 'dd MMM yyyy')} - {format('26 Jan 2024', 'dd MMM yyyy')}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="personal-info-price-detail">
                                        <div className="personal-info-price-title">
                                            <h3>Price Detail</h3>
                                        </div>
                                        <div>
                                            <div className="pkg-price">
                                                <div className="pkg-icon-text">
                                                    <span> {/* Space for Icon */}
                                                        <img src='./double-person-icon.png' alt='double-person-icon' />
                                                    </span>
                                                    <span className="pkg-name">DOUBLE -</span>
                                                </div>
                                                <div className="pkg-icon-text">
                                                    4530
                                                    <p>
                                                        SR / <span id="per-person" className="highlight-text-with-yellow">person</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="personal-info-person-taxes">
                                        <p>
                                            <span>Per Person</span>
                                            <span>4530 SR</span>
                                        </p>
                                        <p>
                                            <span>4530 * 2 person</span>
                                            <span>9060 SR</span>
                                        </p>
                                        <p>
                                            <span>Taxes inc.</span>
                                            <span>230 SR</span>
                                        </p>
                                    </div>


                                    <div className="personal-info-total">
                                        <p>
                                            <span>Total</span>
                                            <span>9290 SR</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
};

export default PersonalDetail;