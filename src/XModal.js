import React, { useState } from 'react';
import './XModal.css';

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone: '',
    dob: ''
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.className === 'modal') {
      setIsOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let tempErrors = {
      username: '',
      email: '',
      phone: '',
      dob: ''
    };
    let valid = true;

    if (!username) {
      tempErrors.username = 'Please fill out this field.';
      valid = false;
    }

    if (!email) {
      tempErrors.email = 'Please fill out this field.';
      valid = false;
    } else if (!email.includes('@')) {
      alert(`Invalid email. Please check your email address.`);
      valid = false;
    }

    if (!phone) {
      tempErrors.phone = 'Please fill out this field.';
      valid = false;
    } else if (phone.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      valid = false;
    }

    if (!dob) {
      tempErrors.dob = 'Please fill out this field.';
      valid = false;
    } else if (new Date(dob) > new Date()) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      valid = false;
    }

    setErrors(tempErrors);

    if (valid) {
      setIsOpen(false);
      setUsername('');
      setEmail('');
      setPhone('');
      setDob('');
    }
  };

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <span>{errors.username}</span>}
              </div>
              <div>
                <label htmlFor="email">Email Address:</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <span>{errors.phone}</span>}
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                {errors.dob && <span>{errors.dob}</span>}
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
