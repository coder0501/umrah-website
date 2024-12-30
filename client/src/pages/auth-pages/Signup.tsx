import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios for API calls
import { useNavigate } from 'react-router-dom';

// Define the shape of the form data
interface userFormData {
    firstName: string;
    lastName: string;
    email: string;
    userPassword: string;
    userConfirmPassword: string;
    role: string;
}

interface agentFormData {
    fullName: string,
    companyName: string,
    phoneNumber: string,
    businessEmail: string,
    travelAgencyLicenseNumber: string,
    agentPassword: string,
    agentConfirmPassword: string,
    role: string,
}

// Signup Page
const SignUp: React.FC = () => {

    //Form Data
    const [userFormData, setUserFormData] = useState<userFormData>({
        firstName: '',
        lastName: '',
        email: '',
        userPassword: '',
        userConfirmPassword: '',
        role: 'user'
    });

    const [agentFormData, setAgentFormData] = useState<agentFormData>({
        fullName: '',
        companyName: '',
        phoneNumber: '',
        businessEmail: '',
        travelAgencyLicenseNumber: '',
        agentPassword: '',
        agentConfirmPassword: '',
        role: 'agent'
    });

    const navigate = useNavigate(); // To navigate after login
    const [errors, setErrors] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState(null)
    const [activeTab, setActiveTab] = useState('user-registration-tab');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab)
    };

    // const [loading, setLoading] = useState(false);

    // Toggling password visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    // Handle field change
    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({ ...userFormData, [e.target.id]: e.target.value });
    };

    const handleAgentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgentFormData({ ...agentFormData, [e.target.id]: e.target.value });
    };

    // Submit form data to the API
    const handleUserSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Inside handleUserSubmit");

        if (userFormData.userPassword !== userFormData.userConfirmPassword) {
            setErrors("Password and Confirm Password doesn't match");
            return;
        }

        try {

            // Send the form data to your Node.js backend using Axios
            console.log("Inside handleUserSubmit", userFormData);

            //Receiving response from server
            const response = await axios.post('http://localhost:5000/auth/signup', userFormData);
            console.log('SignUp successful:', response.data);

            setMessage(response.data.message);

            setErrors('');
            setTimeout(() => {
                console.log(message)
                navigate('/login');
            }, 4000);

        } catch (error) {
            setMessage(null);

            if (axios.isAxiosError(error) && error.response) {
                // Access the error message returned from the backend
                const backendMessage = error.response.data.error;

                // Set the error message to display in the UI
                setErrors(backendMessage);
            } else {
                // Fallback error message if it's not an Axios error or there's no response
                setErrors('An unexpected error occurred. Please try again.');
            }

            console.error('SignUp error:', error);
        }
    };

    const handleAgentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Inside handleAgentSubmit");

        if (agentFormData.agentPassword !== agentFormData.agentConfirmPassword) {
            setErrors("Password and Confirm Password doesn't match");
            return;
        }

        try {
            // Send the form data to your Node.js backend using Axios
            console.log("Inside handleAgentSubmit", agentFormData);

            //Receiving response from server
            const response = await axios.post('http://localhost:5000/auth/signup', agentFormData);
            console.log('SignUp successful:', response.data);

            setMessage(response.data.message);

            setErrors('');
            setTimeout(() => {
                console.log(message)
                navigate('/login');
            }, 4000);
        } catch (error) {
            setMessage(null);
            
            if (axios.isAxiosError(error) && error.response) {
                // Access the error message returned from the backend
                const backendMessage = error.response.data.error;

                // Set the error message to display in the UI
                setErrors(backendMessage);
            } else {
                // Fallback error message if it's not an Axios error or there's no response
                setErrors('An unexpected error occurred. Please try again.');
            }

            console.error('SignUp error:', error);
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
                                    <h1>Join Us on Your Spiritual Journey</h1>
                                    <p>Create an account to explore exclusive Umrah packages, track your bookings, and connect with trusted agents.</p>
                                </div>

                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
                                </div>

                                <div className="user-agent-registration-tab">
                                    <button
                                        className={`user-registration-tab ${activeTab === 'user-registration-tab' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('user-registration-tab')}
                                    >
                                        User Registration
                                    </button>
                                    <button
                                        className={`agent-registration-tab ${activeTab === 'agent-registration-tab' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('agent-registration-tab')}
                                    >
                                        Agent Registration
                                    </button>
                                </div>
                                {activeTab === "user-registration-tab" ? (
                                    <div>
                                        <form onSubmit={handleUserSubmit}>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="firstName">First Name <span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type="text"
                                                            id="firstName"
                                                            value={userFormData.firstName}
                                                            onChange={handleUserChange}
                                                            placeholder="Enter your first name"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="lastName">Last Name </label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type="text"
                                                            id="lastName"
                                                            value={userFormData.lastName}
                                                            onChange={handleUserChange}
                                                            placeholder="Enter your last name"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="email">Email <span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            value={userFormData.email}
                                                            onChange={handleUserChange}
                                                            placeholder="Enter your email"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="password">Password <span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="userPassword"
                                                            value={userFormData.userPassword}
                                                            onChange={handleUserChange}
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
                                                            id="userConfirmPassword"
                                                            value={userFormData.userConfirmPassword}
                                                            onChange={handleUserChange}
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
                                                {errors && <span className="auth-error-message">{errors}</span>}
                                                {message && <span className="auth-message">{message}</span>}
                                                <button type="submit" className="create-account-btn">Create Account</button>
                                                <p className="login-link">Already have an account? <Link className="page-link" to="/Login">Log in here.</Link></p>
                                            </div>
                                        </form>

                                        <div className="social-login">
                                            <div className="center-line-container">
                                                <div className="center-content">
                                                    <div className="text-center">Or sign up with</div>
                                                </div>
                                            </div>
                                            <div className="social-icons">
                                                <button className="icon-button">
                                                    <img src="/msn-logo.svg" alt="MSN" className="social-icon" />
                                                </button>
                                                <button className="icon-button">
                                                    <img src="/google-logo.svg" alt="MSN" className="social-icon" />
                                                </button>
                                                <button className="icon-button facebook">
                                                    <img src="/facebook-logo.svg" alt="MSN" className="social-icon" />
                                                </button>
                                                <button className="icon-button apple">
                                                    <img src="/apple-logo.svg" alt="MSN" className="social-icon" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <form onSubmit={handleAgentSubmit}>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="firstName">Full Name <span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type="text"
                                                            id="fullName"
                                                            value={agentFormData.fullName}
                                                            onChange={handleAgentChange}
                                                            placeholder="Enter your first name"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="email">Company Name <span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type="text"
                                                            id="companyName"
                                                            value={agentFormData.companyName}
                                                            onChange={handleAgentChange}
                                                            placeholder="Enter your email"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="email">Phone Number <span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type="number"
                                                            id="phoneNumber"
                                                            value={agentFormData.phoneNumber}
                                                            onChange={handleAgentChange}
                                                            placeholder="Enter your email"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="email">Business Email <span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type="text"
                                                            id="businessEmail"
                                                            value={agentFormData.businessEmail}
                                                            onChange={handleAgentChange}
                                                            placeholder="Enter your email"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="email">Travel Agency License Number<span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type="text"
                                                            id="travelAgencyLicenseNumber"
                                                            value={agentFormData.travelAgencyLicenseNumber}
                                                            onChange={handleAgentChange}
                                                            placeholder="Enter your email"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="password">Password <span className="required-field-color">*</span></label>
                                                    <div className="input-form-field">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="agentPassword"
                                                            value={agentFormData.agentPassword}
                                                            onChange={handleAgentChange}
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
                                                            id="agentConfirmPassword"
                                                            value={agentFormData.agentConfirmPassword}
                                                            onChange={handleAgentChange}
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
                                                {errors && <span className="auth-error-message">{errors}</span>}
                                                {message && <span className="auth-message">{message}</span>}
                                                <button type="submit" className="create-account-btn">Create Account</button>
                                                <p className="login-link">Already have an account? <Link className="page-link" to="/Login">Log in here.</Link></p>
                                            </div>
                                        </form>

                                        <div className="social-login">
                                            <div className="center-line-container">
                                                <div className="center-content">
                                                    <div className="text-center">Or sign up with</div>
                                                </div>
                                            </div>
                                            <div className="social-icons">
                                                <button className="icon-button">
                                                    <img src="/msn-logo.svg" alt="MSN" className="social-icon" />
                                                </button>
                                                <button className="icon-button">
                                                    <img src="/google-logo.svg" alt="MSN" className="social-icon" />
                                                </button>
                                                <button className="icon-button facebook">
                                                    <img src="/facebook-logo.svg" alt="MSN" className="social-icon" />
                                                </button>
                                                <button className="icon-button apple">
                                                    <img src="/apple-logo.svg" alt="MSN" className="social-icon" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

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

export default SignUp;
