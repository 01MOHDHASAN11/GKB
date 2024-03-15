import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./UserForm.css"
const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    dob: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (parseInt(formData.age) < 0) {
      alert('Age cannot be negative');
      return;
    }
    try {
      await axios.post('/api/users', formData);
      alert('User data submitted successfully!');
      setFormData({
        name: '',
        email: '',
        age: '',
        dob: ''
      });
      navigate('/table');
    } catch (error) {
      console.error('Error submitting user data:', error);
    }
  };

  return (
    <div className='form-container'>
      <h2>User Input Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br />
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        <br />
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;