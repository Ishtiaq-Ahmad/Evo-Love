import React from "react";
import Home from "./view/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import PrivacyPolicy from "./view/PrivacyPolicy";
import UserDetails from './view/UserDetails';
import Users from './view/Users'
import TermsAndConditions from './view/TermsAndConditions';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/home/:userId/:userName" element={<UserDetails/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
