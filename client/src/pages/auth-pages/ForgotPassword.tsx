import React, { useState } from "react";
// import './style.css'; // CSS file for the styles
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

// ForgotPassword Page
const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState<string>(""); // Ensure message is a string
    const navigate = useNavigate(); // To navigate after login
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(''); // State for error handling

    // Handle Forgot Password
    const handleForgotPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            console.log("inside forgot")
            const response = await axios.post('http://localhost:5000/auth/forgot-password',
                { email }
            );

            // Handle the response if it's an object
            const responseMessage = response.data.message;

            if (typeof responseMessage === 'string') {
                setMessage(responseMessage); // Store as message if it's a string
            } else {
                setMessage("Reset link sent successfully."); // Provide a default message
            }

            console.log('responseMessage', responseMessage)

            setError('');
            setTimeout(() => {
                navigate('/EmailConfirmation');
            }, 4000);

        } catch (error) {
            console.error(error);
            setMessage("");

            if (axios.isAxiosError(error) && error.response) {
                // Access the error message returned from the backend
                const backendMessage = error.response.data.error;

                // Set the error message to display in the UI
                setError(backendMessage);
            } else {
                // Fallback error message if it's not an Axios error or there's no response
                setError('Sending Reset Link failed. Please try again.');
            }

            // setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section>
            <div className="auth-form">
                <div className="auth-form-container">
                    <div className="auth-form-main">
                        <div className="auth-form-content-img">
                            <div className="auth-form-headerImg">
                                <span>
                                    <img src="/Umrah.png" alt="" />
                                </span>
                            </div>
                            <div className="auth-form-content" id="form-margin-top">
                                <div className="auth-form-heading" id="forgot-password-content">
                                    <Link to="/Login">
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#1C1917" />
                                            </svg>
                                        </span>
                                    </Link>
                                    <h1>Forgot Your Password?</h1>
                                </div>

                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
                                </div>
                                
                                <form onSubmit={handleForgotPassword}>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="email"> Email <span className="required-field-color">*</span></label>
                                            <div className="input-form-field">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    id="email"
                                                    placeholder="Enter your mail ID"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn">
                                        {error && <div className="auth-error-message">{error}</div>}
                                        {message && <p className="auth-message">{message}</p>}
                                        <button type="submit" className="create-account-btn">{(loading == false) ? 'Send Reset Link' : 'Loading...'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="auth-form-image">
                        <img src="/umrah-img.png" alt="Umrah" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
