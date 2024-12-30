import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './style.css'; // CSS file for the styles
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Login Page
const Login: React.FC = () => {
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState(''); // State for password
    const [showPassword, setShowPassword] = useState(false); // State for showing password
    const [error, setError] = useState(''); // State for error handling
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false); // State for button loading
    const navigate = useNavigate(); // To navigate after login
    const googleClientId = import.meta.env.REACT_APP_GOOGLE_CLIENT_ID;
    console.log(googleClientId)
    
    // Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    // Handle login form submission
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting
        setError(''); // Clear any previous errors

        try {
            console.log('inside login', email, password);
            // Make the API call using axios
            const response = await axios.post('http://localhost:5000/auth/login',
                { email, password },
            );

            console.log(response);

            setMessage(response.data.message);

            setError('');
            setTimeout(() => {
                navigate('/Home');
            }, 2000);
        } catch (error) {
            // Handle error and set the error message
            setMessage(null);
            console.log(error)
            // Check if the error is an Axios error and if it contains a response
            if (axios.isAxiosError(error) && error.response) {
                // Access the error message returned from the backend
                const backendMessage = error.response.data.error;

                // Set the error message to display in the UI
                setError(backendMessage);
            } else {
                // Fallback error message if it's not an Axios error or there's no response
                setError('Login failed. Please try again.');
            }
        } finally {
            setLoading(false); // Stop loading when done
        }
    };



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
                            <div className="auth-form-content">
                                <div className="auth-form-heading">
                                    <h1>Welcome Back! Your Journey Awaits</h1>
                                    <p>Log in to access exclusive Umrah packages, manage your bookings, and connect with agents.</p>
                                </div>

                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
                                </div>


                                <form onSubmit={handleLogin}>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="email">
                                                Email <span className="required-field-color">*</span>
                                            </label>
                                            <div className="input-form-field">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="input-group">
                                            <label htmlFor="password">
                                                Password <span className="required-field-color">*</span>
                                            </label>
                                            <div className="input-form-field">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Enter your password"
                                                    required
                                                />
                                                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </span>
                                            </div>
                                            <div className="forgot-password">
                                                <Link className="page-link" to="/ForgotPassword">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-btn">
                                        {/* Display error message if login fails */}
                                        {error && <div className="auth-error-message">{error}</div>}
                                        {message && <span className="auth-message">{message}</span>}
                                        <button type="submit" className="create-account-btn" disabled={loading}>
                                            {loading ? 'Logging in...' : 'LOGIN'}
                                        </button>
                                        <p className="login-link">
                                            New to the platform? <Link className="page-link" to="/Signup">Create an account </Link>and start your spiritual journey today.
                                        </p>
                                    </div>
                                </form>

                                <div className="social-login">
                                    <div className="center-line-container">
                                        <div className="center-content">
                                            <div className="text-center">Login with</div>
                                        </div>
                                    </div>
                                    <div className="social-icons">
                                        <button className="icon-button">
                                            <img src="/msn-logo.svg" alt="MSN" className="social-icon" />
                                        </button>
                                        <button className="icon-button">
                                            <img src="/google-logo.svg" alt="Google" className="social-icon" />
                                        </button>
                                        <button className="icon-button facebook">
                                            <img src="/facebook-logo.svg" alt="Facebook" className="social-icon" />
                                        </button>
                                        <button className="icon-button apple">
                                            <img src="/apple-logo.svg" alt="Apple" className="social-icon" />
                                        </button>
                                    </div>
                                </div>
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

export default Login;
















// Handle Google login success

// const handleGoogleLoginSuccess = async (response: any) => {
//     const { tokenId } = response; // Get the tokenId from response

//     try {
//         const res = await axios.post('http://localhost:5000/auth/google', { idToken: tokenId });
//         console.log(res);
//         // Assuming the response contains a token
//         // localStorage.setItem('token', res.data.token);

//         // Redirect to a protected route (e.g., /dashboard)
//         navigate('/home');
//     } catch (error) {
//         setError('Google login failed. Please try again.');
//     }
// };

// // Handle Google login failure
// const handleGoogleLoginError = () => {
//     // Handle error here
//     console.log('Login failed');
// };
// //         setError('Google login failed. Please try again.');
// // };



{/* <GoogleOAuthProvider clientId={googleClientId}>

<GoogleLogin
    onSuccess={handleGoogleLoginSuccess} // Handle success
    onError={handleGoogleLoginError} // Correctly used
/>

</GoogleOAuthProvider> */}