import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Learn } from "./pages/Learn";
import { Practice } from "./pages/Practice";
import { Mentorship } from "./pages/Mentorship";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
export function AppRouter() {
  return <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>;
}