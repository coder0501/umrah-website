// Necessary imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Auth Imports 
import Signup from './pages/auth-pages/Signup';
import Login from './pages/auth-pages/Login';
import ForgotPassword from './pages/auth-pages/ForgotPassword';
import EmailConfirmation from './pages/auth-pages/EmailConfirmation';
import ResetPassword from './pages/auth-pages/ResetPassword';

//Main file Imports
import StartScreen from './pages/auth-pages/StartScreen';
import Home from './pages/Home';
import Packages from './pages/Packages';
import PackageDetail from './pages/PackageDetail';
import PersonalInfo from './pages/PersonalInfo';
import SuccessfullCompleted from './pages/SuccessfullCompleted';
import AccountPersonalInfoPassword from './pages/account/AccountPersonalInfoPassword';
import PreviousToursGroupChats from "./pages/account/PreviousToursGroupChats";
import Notification from "./pages/account/Notification";
import PrivacyPolicy from "./pages/account/PrivacyPolicy";
import HelpAndSupport from "./pages/account/HelpAndSupport";

// App Component
const App: React.FC = () => {

  return (
    <>
      {/* Router containing Routes */}
      <Router>
        {/* Routes to add all page route */}
        <Routes>
          {/* All Auth Pages Routes */}
          <Route path="/" element={<StartScreen />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/EmailConfirmation" element={<EmailConfirmation />} />
          <Route path="/ResetPassword/:token" element={<ResetPassword />} />


          {/* All User Pages Routes */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Packages" element={<Packages />} />
          <Route path="/PackageDetail" element={<PackageDetail />} />
          <Route path="/PersonalInfo" element={<PersonalInfo />} />
          <Route path="/SuccessfullCompleted" element={<SuccessfullCompleted />} />
          <Route path="/AccountPersonalInfoPassword" element={<AccountPersonalInfoPassword />} />
          <Route path="/PreviousToursGroupChats" element={<PreviousToursGroupChats />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/Help-and-Support" element={<HelpAndSupport />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;







// const googleClientId = import.meta.env.REACT_APP_GOOGLE_CLIENT_ID;

{/* <GoogleOAuthProvider clientId={googleClientId}> */ }
