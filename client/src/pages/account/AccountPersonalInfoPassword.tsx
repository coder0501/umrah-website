import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import AccountSidebar from "./AccountSidebar";
import { Link } from "react-router-dom";
import axios from "axios";

// Define the shape of the form data
interface FormData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}

const AccountPersonalInfoPassword: React.FC = () => {

    //Form Data
    const [formData, setFormData] = useState<FormData>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [activeTab, setActiveTab] = useState('personal-info');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // const togglePasswordVisibility = () => setShowPassword(!showPassword);
    // const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    // Handle field change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleTabClick = (tab: any) => {
        setActiveTab(tab)
    };

    const handlePersonalInfoSave = async () => {
        const res = await axios.put("http://localhost:5000/account/");


    };

    const handleChangePassword = () => {

    };

    return (
        <>
            <Navbar />
            <section className="account-personal-info-section">
                <div className="account-personal-info">
                    <div className="account-personal-info-container">
                        <div className="account-personal-info-main">
                            <div className="account-settings">
                                <AccountSidebar />
                                <div className="account-profile-form">
                                    <div className="personal-info-pwd-tabs">
                                        <button
                                            className={`personal-info-tab ${activeTab === 'personal-info' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('personal-info')}
                                        >
                                            Personal Information
                                        </button>
                                        <button
                                            className={`pwd-tab ${activeTab === 'change-pwd' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('change-pwd')}
                                        >
                                            Change Password
                                        </button>
                                    </div>
                                    {activeTab === 'personal-info' ? (
                                        <form onSubmit={handlePersonalInfoSave}>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <div id="account-form-field" className="input-form-field">
                                                        <input
                                                            type="text"
                                                            id="firstName"
                                                            value="Mu'adh Ward"
                                                            // onChange={handleChange}
                                                            placeholder="Enter your first name"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="lastName">Last Name </label>
                                                    <div id="account-form-field" className="input-form-field">
                                                        <input
                                                            type="text"
                                                            id="lastName"
                                                            value="kouri"
                                                            // onChange={handleChange}
                                                            placeholder="Enter your last name"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="email">Email</label>
                                                    <div id="account-form-field" className="input-form-field">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            value="ward@gmail.com"
                                                            // onChange={handleChange}
                                                            placeholder="Enter your email"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row phone">
                                                <div className="input-group">
                                                    <label>Phone</label>
                                                    <div id="form-country-codes-phoneno" className="input-form-field">
                                                        <span>
                                                            <img src="/country-img.png" alt="country-img" />
                                                        </span>
                                                        <select className="country-codes">
                                                            <option value="+971">
                                                                +971
                                                            </option>
                                                        </select>
                                                        <input type="tel" defaultValue="3556 655 655" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="save-button">
                                                <button type="submit" >SAVE</button>
                                            </div>
                                        </form>
                                    ) : (
                                        <form onSubmit={handleChangePassword}>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="password">Current Password <span className="required-field-color">*</span></label>
                                                    <div id="account-form-field" className="input-form-field">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="currentPassword"
                                                            value={"currentPassword"}
                                                            onChange={handleChange}
                                                            placeholder="Enter Current Password"
                                                            required
                                                        />
                                                        {/* <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                        </span> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <Link to="#"> Need a new Password? </Link>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="password">New Password <span className="required-field-color">*</span></label>
                                                    <div id="account-form-field" className="input-form-field">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="newPassword"
                                                            value={"newPassword"}
                                                            onChange={handleChange}
                                                            placeholder="Enter New Password"
                                                            required
                                                        />
                                                        {/* <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                        </span> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="input-group">
                                                    <label htmlFor="password">Confirm Password <span className="required-field-color">*</span></label>
                                                    <div id="account-form-field" className="input-form-field">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            id="confirmPassword"
                                                            value={"confirmPassword"}
                                                            onChange={handleChange}
                                                            placeholder="Enter Confirm Password"
                                                            required
                                                        />
                                                        {/* <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                        </span> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="update-pwd-button">
                                                <button type="submit" >Update Password</button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default AccountPersonalInfoPassword;