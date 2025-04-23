import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const url = import.meta.env.API_URL;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send data to the server
    try {
      const res = await fetch(`${url}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // If mail is sent successfully, show a success alert
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after submission
      } else {
        // If there’s an error, show an error alert
        alert('Error sending email.');
      }
    } catch (error) {
      // In case of network error or other issues
      alert('Error sending email.');
    }
  };

  return (
    <div id="contact-form" className="container mt-5">
      <div className="row">
        {/* Left Column: Heading + Text */}
        <div className="col-md-6 d-none d-md-block">
          <h2>Wanna Connect?</h2>
          <p>
            Have a project in mind or just want to say hello? I'm always open to new
            opportunities, collaborations, or simply a good conversation. Drop me a
            message and I’ll get back to you as soon as I can!
          </p>
        </div>

        {/* Mobile Heading */}
        <div className="col-12 d-block d-md-none text-center mb-4">
          <h2>Wanna Connect?</h2>
        </div>

        {/* Right Column: The Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input 
                type="text" 
                name="name" 
                className="form-control inp-field" 
                id="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                name="email" 
                className="form-control inp-field" 
                id="email" 
                placeholder="you@example.com" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                name="subject" 
                className="form-control inp-field" 
                id="subject" 
                placeholder="What's this about?" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                name="message" 
                className="form-control inp-field" 
                id="message" 
                rows="4" 
                placeholder="Your message here..." 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary fancy-hover">
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
