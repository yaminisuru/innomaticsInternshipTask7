import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="container text-light">
      <h1 className="text-danger text-center mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded">
        <div className="mb-3">
          <label className="form-label text-danger">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label text-danger">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label text-danger">Message</label>
          <textarea className="form-control" name="message" value={formData.message} onChange={handleInputChange} rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-danger w-100">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
