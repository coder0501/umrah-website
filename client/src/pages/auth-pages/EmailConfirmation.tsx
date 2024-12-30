import React from 'react';
// import './style.css'; // CSS file for the styles

const EmailConfirmation: React.FC = () => {

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
                                <div className="auth-form-heading" id="email-confirmation-content">
                                    <h1>Email Confirmation</h1>
                                    <p className='email-confirmation-text'>
                                        <strong>Check Your Email,</strong> We’ve sent a password reset link to your email. Please check your inbox (and your spam folder if you don’t see it) to reset your password.
                                    </p>
                                </div>
                                <div className="center-line-container">
                                    <span className="center-content">
                                        <img src="/U-logo.svg" alt="Center Logo" />
                                    </span>
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

export default EmailConfirmation;
