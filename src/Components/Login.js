import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import './myStyles.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  const [signupMode, setSignupMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    Name: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loginStatus, setLoginStatus] = useState(null); // Initialize loginStatus
  const [signupStatus, setSignupStatus] = useState(null); // Initialize signupStatus

  const history = useNavigate(); // Initialize useHistory

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError('');

      const url = signupMode
        ? 'https://9mv3cy-5000.csb.app/user/register'
        : 'https://9mv3cy-5000.csb.app/user/login';

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(url, requestOptions);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong.');
      }

      setLoading(false);

      if (signupMode) {
        setSignupStatus('success'); // Set signupStatus to 'success'
      } else {
        setLoginStatus('success'); // Set loginStatus to 'success'
        localStorage.setItem('userData', JSON.stringify(responseData));
        history('/app/Welcome'); // Navigate to the dashboard after successful login
      }
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Something went wrong.');
      console.error(err);
    }
  };

  const toggleSignupMode = () => {
    setSignupMode(!signupMode);
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <p className="login-text">
          {signupMode ? 'Sign Up Your Account' : 'Login Your Account'}
        </p>
        {signupMode && (
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />
        )}
        <TextField
          name={signupMode ? 'Name' : 'Name'}
          label={signupMode ? 'Username' : 'Name'}
          variant="outlined"
          fullWidth
          value={formData.Name}
          onChange={handleInputChange}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={formData.password}
          onChange={handleInputChange}
        />

        <Button
          variant="outlined"
          onClick={handleSubmit}
          disabled={loading}
          fullWidth
        >
          {loading ? 'Loading...' : signupMode ? 'Sign Up' : 'Log In'}
        </Button>
        <Button variant="outlined" onClick={toggleSignupMode} fullWidth>
          {signupMode ? 'Switch to Login' : 'Switch to Signup'}
        </Button>

        {error && (
          <p className="error-message">
            <strong>Error:</strong> {error}
          </p>
        )}

        {loginStatus === 'success' && <p>Login Successful!</p>}
        {signupStatus === 'success' && <p>Signup Successful!</p>}
      </div>
    </div>
  );
}
