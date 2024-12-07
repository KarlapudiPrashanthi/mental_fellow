// src/components/Signup.jsx
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Link, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [fieldError, setFieldError] = useState(''); // New state for field error message

  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password)
      ? ''
      : 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.';
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!username || !email || !password || !confirmPassword) {
      setFieldError('Please fill in all fields!'); // Set field error message
      return;
    } else {
      setFieldError(''); // Clear error if all fields are filled
    }

    // Check if user already exists
    const existingUserDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (existingUserDetails && existingUserDetails.username === username) {
      setRegistrationError('An account with this username already exists!');
      return;
    }

    // Validate password and confirm password
    if (password !== confirmPassword) {
      setFieldError('Passwords do not match!'); // Set field error message
      return;
    }
    if (passwordError) {
      setFieldError('Please fix the password errors before submitting.'); // Set field error message
      return;
    }

    // Save user details
    const userDetails = { username, email, password };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    console.log('Registration successful:', userDetails);
    setRegistrationError(''); // Clear error if registration is successful
    navigate('/login'); // Redirect to login page after successful signup
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Paper elevation={0} sx={{ padding: 4, borderRadius: 2, backgroundColor: '#f5f5f5', color: '#333333' }}>
          <Box textAlign="center" marginBottom={2}>
            <Typography variant="h4" component="h1" color="#00796b">
              Register
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join us by creating your account.
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
            {registrationError && (
              <Typography color="error" variant="body2" align="center">
                {registrationError}
              </Typography>
            )}
            {fieldError && ( // Display field error message
              <Typography color="error" variant="body2" align="center" sx={{ marginBottom: 2 }}>
                {fieldError}
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputLabelProps={{
                style: { color: '#00796b' },
              }}
              InputProps={{
                style: { color: '#333333' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00796b',
                  },
                  '&:hover fieldset': {
                    borderColor: '#004d40',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00796b',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: { color: '#00796b' },
              }}
              InputProps={{
                style: { color: '#333333' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00796b',
                  },
                  '&:hover fieldset': {
                    borderColor: '#004d40',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00796b',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
              InputLabelProps={{
                style: { color: '#00796b' },
              }}
              InputProps={{
                style: { color: '#333333' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00796b',
                  },
                  '&:hover fieldset': {
                    borderColor: '#004d40',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00796b',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPassword && password !== confirmPassword}
              helperText={confirmPassword && password !== confirmPassword ? 'Passwords do not match.' : ''}
              InputLabelProps={{
                style: { color: '#00796b' },
              }}
              InputProps={{
                style: { color: '#333333' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00796b',
                  },
                  '&:hover fieldset': {
                    borderColor: '#004d40',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00796b',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: 2, backgroundColor: '#00796b', '&:hover': { backgroundColor: '#004d40' } }}
            >
              Sign Up
            </Button>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Already have an account?{' '}
              <Link onClick={() => navigate('/login')} color="#00796b" underline="hover" style={{ cursor: 'pointer' }}>
                Login
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Signup;
