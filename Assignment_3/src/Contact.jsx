import { useState } from 'react';
import './App.css';

function Contact() {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [purpose, setPurpose] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  // Purpose options for display
  const purposeLabels = {
    general: 'General Inquiry',
    support: 'Support',
    feedback: 'Feedback',
    partnership: 'Partnership',
  };

  // Form validation
  function validate() {
    const errors = {};
    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) errors.email = 'Email is invalid';
    if (!purpose) errors.purpose = 'Please select a purpose';
    if (!message.trim()) errors.message = 'Message is required';
    return errors;
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData({ name, email, phone, purpose, company, message });
      setErrors({});
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setPurpose('');
      setCompany('');
      setMessage('');
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <div className="contact">
      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">*Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">*Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="purpose">*Purpose of Contact:</label>
          <select
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership</option>
          </select>
          {errors.purpose && <p className="error">{errors.purpose}</p>}
        </div>

        <div>
          <label htmlFor="company">Company/Organization:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message">*Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Submitted Data Display */}
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Phone:</strong> {submittedData.phone || 'Not provided'}</p>
          <p><strong>Purpose:</strong> {purposeLabels[submittedData.purpose]}</p>
          <p><strong>Company:</strong> {submittedData.company || 'Not provided'}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;