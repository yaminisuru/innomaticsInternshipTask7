import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';

function Services() {
  return (
    <div className="container text-light">
      <h1 className="text-danger text-center mb-4">Our Services</h1>
      <p>
        At Innomatics Research Labs, we offer a wide range of services designed to meet the demands of modern businesses. Our focus
        is on leveraging the latest advancements in technology to drive innovation and deliver outstanding results for our clients.
      </p>
      <p>
        From AI-powered solutions to comprehensive data-driven strategies, our services are designed to provide value and scalability.
        Whether you are a startup or an established enterprise, we have the expertise to help you thrive in today's competitive market.
      </p>

      <h3 className="text-danger text-center mt-5 mb-4">Explore Our Services</h3>
      <div className="d-flex justify-content-around mb-4">
        <NavLink className="btn btn-outline-danger" to="design">AI & Data Science Solutions</NavLink>
        <NavLink className="btn btn-outline-danger" to="development">Custom Software Development</NavLink>
        <NavLink className="btn btn-outline-danger" to="marketing">Digital Transformation & Consulting</NavLink>
      </div>

      <Routes>
        <Route path="design" element={<ServiceDetail name="AI & Data Science Solutions" />} />
        <Route path="development" element={<ServiceDetail name="Custom Software Development" />} />
        <Route path="marketing" element={<ServiceDetail name="Digital Transformation & Consulting" />} />
      </Routes>
    </div>
  );
}

export default Services;
