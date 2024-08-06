import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import Home from './Home';
import Profile from './ProfileManagement';
import Verification from './VerificationManagement';
import ProfileEdit from './ProfileManagementEdit';
import VerificationEdit from './VerificationManagementEdit';
import PayOutInformation from './PayoutInformationVerification';
import PayoutEdit from './PayoutInformationManagementEdit';
import UserWallet from './UserWallet';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-edit" element={<ProfileEdit/>} />

          <Route path="/verification" element={<Verification/>} />
          <Route path="/verification-edit" element={<VerificationEdit/>} />
          <Route path="/Payout-information" element={<PayOutInformation/>} />
          <Route path="/Payout-edit" element={<PayoutEdit/>} />
          <Route path="/UserWallet" element={<UserWallet/>} />







        </Routes>
      </div>
    </Router>
  );
};

export default App;
