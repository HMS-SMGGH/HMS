import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// --- SVG Icons (No changes) ---
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);


function Signup() {
  const navigate = useNavigate(); // Hook for routing

  // --- 1. formData STATE ---
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    aadhar: '',
    education: '',
    otherEducation: '',
    collegeName: '',
    course: '',
    collegeYear: '',
    collegeAddress: '',
    address: '',
    pin: '',
    currentAddress: '',
    currentPin: '',
    dob: '',
    age: '', // Age will be calculated from DOB
    category: '',
    caste: '',
    fatherName: '',
    fatherMobile: '',
    motherName: '',
    motherMobile: '',
    applicationId: '',
    emailId: '',
    password: '',
    confirmPassword: ''
  });

  // --- 2. LOGIC STATE ---
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFieldDisabled, setIsFieldDisabled] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6-digit OTP
  const [loadingOtp, setLoadingOtp] = useState(false);
  const [passwordChecks, setPasswordChecks] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
    length: false,
  });
  // ---------------------------------

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // Effect to calculate age from DOB
  useEffect(() => {
    if (formData.dob) {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age_calc = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age_calc--;
      }
      setFormData(prev => ({ ...prev, age: age_calc.toString() }));
    }
  }, [formData.dob]);

  // --- 3. handleChange FUNCTION ---
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the form data for all fields
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // If the user is typing in the *main* password field,
    // run validation and update the checklist state.
    if (name === 'password') {
      setPasswordChecks({
        lowercase: /[a-z]/.test(value),
        uppercase: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
        specialChar: /[\W_]/.test(value),
        length: value.length >= 8,
      });
    }
  };
  // -------------------------------------------

  // --- 4. OTP HANDLERS ---
  const generateOtp = () => {
    // Basic form validation before sending OTP
    const requiredFields = [
        'firstName', 'lastName', 'mobile', 'aadhar', 'dob', 'emailId', 'password', 'confirmPassword'
    ];
    for (const field of requiredFields) {
        if (!formData[field]) {
            alert(`Please fill out the ${field} field.`);
            return;
        }
    }
    if (formData.password !== formData.confirmPassword) {
        alert("Password and Confirm Password must match.");
        return;
    }
    const allChecksPass = Object.values(passwordChecks).every(v => v === true);
    if (!allChecksPass) {
        alert("Please ensure your password meets all requirements.");
        return;
    }

    setLoadingOtp(true);
    // Simulate API call to send OTP
    setTimeout(() => {
      console.log(`Simulating OTP sent to ${formData.emailId}`);
      setLoadingOtp(false);
      setOtpSent(true);
      // Disable relevant fields after OTP is sent
      setIsFieldDisabled(true);
    }, 1500);
  };

  // **MODIFIED** This function just handles typing in the boxes
  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input
      if (value !== '' && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  // **ADDED** This function handles the "Verify OTP" button click
  const handleVerifyOtp = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
        alert("Please enter all 6 digits of the OTP.");
        return;
    }

    console.log("Verifying OTP:", enteredOtp);
    // Mock verification logic
    if (enteredOtp === '123456') { // Replace with actual verification logic
        setOtpVerified(true);
        alert('OTP Verified! Click Sign Up to complete registration.');
    } else {
        alert('Invalid OTP. Please try again.');
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };
  // ------------------------------------

  const handleSignup = (event) => {
    event.preventDefault();

    if (!otpVerified) {
        alert("Please generate and verify the OTP first.");
        return;
    }
    
    // Final check for password match and validation
    if (formData.password !== formData.confirmPassword) {
        alert("Password and Confirm Password must match.");
        return;
    }
    
    // **YOUR SUBMISSION LOGIC HERE**
    console.log('Final Form Data for Submission:', formData);
    alert('Signup Successful! Redirecting to login...');
    navigate('/login'); // Assuming you want to navigate after successful signup
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };


  return (
    <div className="login-wrapper">
      <button
        className="theme-toggle"
        onClick={toggleDarkMode}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>

      <div className="login-container">
        <div className="login-header">
          <h1>Sign Up</h1>
          <p>Create New Account</p>
        </div>

        <form onSubmit={handleSignup} className="login-form">

          <h3 className="section-title">Personal Details</h3>

          {/* First Name */}
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="First Name"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Middle Name */}
          <div className="input-group">
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Middle Name"
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Last Name */}
          <div className="input-group">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Last Name"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Mobile No. */}
          <div className="input-group">
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Mobile No."
              required
              readOnly={isFieldDisabled}
              maxLength={10}
            />
          </div>

          {/* Aadhar Card */}
          <div className="input-group">
            <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,12}$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Aadhar Card Number"
              required
              readOnly={isFieldDisabled}
              maxLength={12}
            />
          </div>

          <h3 className="section-title">DOB</h3>

          <div className="input-group">
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              readOnly={isFieldDisabled}
            />
          </div>
          {/* Display Age - Read-only field */}
          {formData.age && (
              <div className="input-group">
                  <input
                      type="text"
                      name="age"
                      value={`Age: ${formData.age}`}
                      readOnly
                      disabled
                      placeholder="Age"
                  />
              </div>
          )}


          <h3 className="section-title">Academic Details</h3>
          {/* Education Details */}
          <div className="input-group">
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              disabled={isFieldDisabled}
              style={{
                width: '100%',
                padding: '14px 15px 14px 45px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '16px',
                backgroundColor: 'var(--input-bg)',
                color: 'var(--text-color)',
                outline: 'none',
                cursor: 'pointer',
                appearance: 'none'
              }}
            >
              <option value="">Select Education Level</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
              <option value="Diploma">Diploma</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Show this input only if 'Other' is selected */}
          {formData.education === 'Other' && (
            <div className="input-group">
              <input
                type="text"
                name="otherEducation"
                value={formData.otherEducation}
                onChange={handleChange}
                placeholder="Enter Other Education Details"
                required
                readOnly={isFieldDisabled}
              />
            </div>
          )}


          {/* Course */}
          <div className="input-group">
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z ]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Course Name (e.g. B.Tech)"
              required
              readOnly={isFieldDisabled}
            />
          </div>


          {/* College Name */}
          <div className="input-group">
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z ]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="College Name"
              required
              readOnly={isFieldDisabled}
            />
          </div>


          {/* College Year */}
          <div className="input-group">
            <input
              type="text"
              name="collegeYear"
              value={formData.collegeYear}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z0-9 ]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="College Year (e.g. first)"
              required
              readOnly={isFieldDisabled}
            />
          </div>


          {/* College Address */}
          <div className="input-group">
            <input
              type="text"
              name="collegeAddress"
              value={formData.collegeAddress}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z0-9\s,./#'()-]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="College Address"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          <h3 className="section-title">Parents Details</h3>

          {/* Father's Full Name */}
          <div className="input-group">
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Father's Full Name"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Father's Phone No. */}
          <div className="input-group">
            <input
              type="text"
              name="fatherMobile"
              value={formData.fatherMobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Father's Phone No."
              required
              readOnly={isFieldDisabled}
              maxLength={10}
            />
          </div>

          {/* Mother's Full Name */}
          <div className="input-group">
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Mother's Full Name"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Mother's Phone No. */}
          <div className="input-group">
            <input
              type="text"
              name="motherMobile"
              value={formData.motherMobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Mother's Phone No."
              required
              readOnly={isFieldDisabled}
              maxLength={10}
            />
          </div>


          <h3 className="section-title">Permanent Address</h3>

          {/* Permanent Address */}
          <div className="input-group">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z0-9\s,./#'()-]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Your Permanent Address"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Pin Code */}
          <div className="input-group">
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,6}$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Pin Code"
              required
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              readOnly={isFieldDisabled}
            />
          </div>

          <h3 className="section-title">Current Address</h3>

          {/* Current Address */}
          <div className="input-group">
            <input
              type="text"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z0-9\s,./#'()-]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Your Current Address"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Pin Code */}
          <div className="input-group">
            <input
              type="text"
              name="currentPin"
              value={formData.currentPin}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,6}$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Pin Code"
              required
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              readOnly={isFieldDisabled}
            />
          </div>

          <h3 className="section-title">Reservation Details</h3>

          {/* Category */}
          <div className="input-group">
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z ]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Category"
              required
              readOnly={isFieldDisabled}
            />
          </div>


          {/* Caste */}
          <div className="input-group">
            <input
              type="text"
              name="caste"
              value={formData.caste}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z ]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Caste"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          <h3 className="section-title">Hostel Account Details</h3>

          {/* Application ID */}
          <div className="input-group">
            <input
              type="text"
              name="applicationId"
              value={formData.applicationId}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z0-9]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Application ID"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Email ID */}
          <div className="input-group">
            <input
              type="text"
              name="emailId"
              value={formData.emailId}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z0-9@.]*$/.test(value)) {
                  handleChange(e);
                }
              }}
              placeholder="Email"
              required
              readOnly={isFieldDisabled}
            />
          </div>

          {/* Password Input */}
          <div className="input-group password-input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              readOnly={isFieldDisabled}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)} className="eye-icon password-eye-icon">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Password Checklist */}
          <ul className="password-checklist">
            <li className={passwordChecks.lowercase ? 'valid' : ''}>
                <span style={{ color: passwordChecks.lowercase ? 'green' : 'inherit' }}>
                    {passwordChecks.lowercase ? '✔' : '•'}
                </span> At least one lowercase letter
            </li>
            <li className={passwordChecks.uppercase ? 'valid' : ''}>
                <span style={{ color: passwordChecks.uppercase ? 'green' : 'inherit' }}>
                    {passwordChecks.uppercase ? '✔' : '•'}
                </span> At least one uppercase letter
            </li>
            <li className={passwordChecks.number ? 'valid' : ''}>
                <span style={{ color: passwordChecks.number ? 'green' : 'inherit' }}>
                    {passwordChecks.number ? '✔' : '•'}
                </span> At least one number
            </li>
            <li className={passwordChecks.specialChar ? 'valid' : ''}>
                <span style={{ color: passwordChecks.specialChar ? 'green' : 'inherit' }}>
                    {passwordChecks.specialChar ? '✔' : '•'}
                </span> At least one special character
            </li>
            <li className={passwordChecks.length ? 'valid' : ''}>
                <span style={{ color: passwordChecks.length ? 'green' : 'inherit' }}>
                    {passwordChecks.length ? '✔' : '•'}
                </span> Minimum 8 characters
            </li>
          </ul>

          {/* Confirm Password Input */}
          <div className="input-group password-input-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              readOnly={isFieldDisabled}
              required
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eye-icon password-eye-icon">
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* --- MODIFIED OTP Section --- */}
          {otpSent && !otpVerified && (
            <>
              <label style={{ textAlign: 'center', marginTop: '15px' }}>Enter OTP:</label>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '10px 0' }}>
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, idx)}
                    onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                    className="otp-box"
                    style={{ width: '40px', height: '40px', textAlign: 'center', fontSize: '18px', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                ))}
              </div>
                
              {/* --- THIS IS THE ADDED BUTTON --- */}
              <button 
                type="button" 
                onClick={handleVerifyOtp} 
                className="login-button" 
                style={{ marginTop: '15px', marginBottom: '10px' }}
              >
                Verify OTP
              </button>
              {/* ---------------------------------- */}
                
              <p style={{ textAlign: 'center', color: 'green', fontSize: '14px' }}>OTP sent to {formData.emailId}</p>
            </>
          )}
          {/* ------------------------------------- */}


          {!otpSent && (
            <button type="button" onClick={generateOtp} disabled={loadingOtp} className="login-button">
              {loadingOtp ? 'Sending OTP...' : 'Generate OTP'}
            </button>
          )}
          
          {otpVerified && (
              <button type="submit" className="login-button" style={{ marginTop: '20px' }}>
                  Complete Sign Up
              </button>
          )}
          
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--link-color, #007bff)', cursor: 'pointer' }}>
              Login
            </Link>
          </p>

          <div className="login-footer" style={{marginTop: '10px'}}>
            <Link to="/studentLogin" className="link-pink">Student Login</Link> 
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;