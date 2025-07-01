import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/register', formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" onChange={handleChange} placeholder="Username" /><br />
        <input name="email" onChange={handleChange} placeholder="Email" /><br />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
