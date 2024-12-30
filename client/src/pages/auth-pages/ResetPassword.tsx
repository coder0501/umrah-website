import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './style.css'; // CSS file for the styles
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

// Reset password Page
const ResetPassword: React.FC = () => {

    const { token } = useParams();  // To receive token from browser url.
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate(); // To navigate after login

    // Method to handle the reset password link
    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        try {

            //Condition ot check password and confrim password
            if (password !== confirmPassword) {
                setError("Password and Confirm Password doesn't match");
                return;
            }

            setLoading(true);

            console.log("inside reset password")
            const response = await axios.post(
                `http://localhost:5000/auth/reset-password/${token}`,
                { password },
                // { withCredentials: true }
            );
            setMessage(response.data.message);
            setError("");
            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (err) {
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

            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

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
                            <div className="auth-form-content forgot-password-content" id="form-margin-top">
                                <div className="auth-form-heading" id="reset-password-content">
                                        <Link to="/Login">
                                            <span>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#1C1917" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <div>
                                            <h1>Reset Your Password?</h1>
                                            <p>Enter a new password for your account.</p>
                                        </div>
                                </div>

                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
                                </div>
                                <form onSubmit={handleResetPassword}>
                                    <div className="form-row">
                                        <div className="input-group">

                                            <label htmlFor="password">New Password <span className="required-field-color">*</span></label>
                                            <div className="input-form-field">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Enter password"
                                                    required
                                                />
                                                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="confirmPassword">Confirm Password <span className="required-field-color">*</span></label>
                                            <div className="input-form-field">
                                                <input
                                                    type={showConfirmPassword ? 'text' : 'password'}
                                                    id="confirmPassword"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    placeholder="Confirm password"
                                                    required
                                                />
                                                <span className="password-toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-btn">
                                        {error && <div className="auth-error-message">{error}</div>}
                                        {message && <p className="auth-message">{String(message)}</p>}
                                        <button type="submit" className="create-account-btn">{(loading === false) ? 'Reset Password' : 'Loading...'}</button>
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

export default ResetPassword;
