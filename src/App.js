import React from "react";
import Home from "./view/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import PrivacyPolicy from "./view/PrivacyPolicy";
import UserDetails from './view/UserDetails';
import Users from './view/Users'
import TermsAndConditions from './view/TermsAndConditions';
import BlogDetails from './view/BlogDetails';
import ProductDetails from './view/ProductDetails';
import CourseDetails from './view/CourseDetails'

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
          <Route path="/blog-detail/:userName" element={<BlogDetails/>}/>
          <Route path="/product-detail/:userName" element={<ProductDetails/>}/>
          <Route path="/course-detail/:userName" element ={<CourseDetails/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
