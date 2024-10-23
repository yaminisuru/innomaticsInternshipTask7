import React from 'react';

function ServiceDetail({ name }) {
  const serviceDetails = {
    "AI & Data Science Solutions": "We offer AI-powered solutions and data science strategies tailored to your business needs. From predictive analytics to machine learning models, our team provides end-to-end solutions to help you make data-driven decisions.",
    "Custom Software Development": "Our expert developers build customized software solutions designed to optimize your workflows and improve business efficiency. From web applications to enterprise-level systems, we deliver software that meets your unique requirements.",
    "Digital Transformation & Consulting": "We help organizations embrace digital transformation through strategic consulting. Whether you're looking to migrate to the cloud, enhance your cybersecurity, or optimize your IT infrastructure, our consultants are here to guide you every step of the way."
  };

  return (
    <div className="text-center text-light mt-4">
      <h2 className="text-danger">{name}</h2>
      <p>{serviceDetails[name]}</p>
    </div>
  );
}

export default ServiceDetail;
