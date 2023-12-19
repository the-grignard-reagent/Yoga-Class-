import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';


const LoginSignup = () => {
  const [action, setAction] = useState("Yoga Form");
  const [formData, setFormData] = useState({
    batch: '',
    name: '',
    age: '',
  });
  const [paymentError, setPaymentError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(null);
  const [signupError, setSignupError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

    
    if (e.target.id === 'age') {
      setAgeError('');
    }
  };

  const validatePayment = () => {
    const payment = parseFloat(formData.payment);

    if (isNaN(payment) || payment <= 0) {
      setPaymentError('Please enter a valid payment amount');
      return false;
    }

    setPaymentError('');
    return true;
  };

  const validateAge = () => {
    const age = parseInt(formData.age, 10);

    
    if (isNaN(age) || age < 18 || age > 65) {
      setAgeError('Age must be between 18 and 65');
      return false;
    }

   
    setAgeError('');
    return true;
  };
  

  const handleSubmit = async () => {
    
    if (!validateAge()) {
      return;
    }

    try {
     
      const response = await axios.post('/api/signup', formData);
      console.log(response.data); 

      
      setSignupSuccess('User signed up successfully!');
      setSignupError(null);
    } catch (error) {
      console.error(error.message);
     
      setSignupSuccess(null);
      setSignupError('Error signing up. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <select
              id="batch"
              value={formData.batch}
              onChange={handleChange}
            >
              <option value="">Select Batch</option>
              <option value="6-7AM">6 - 7 AM</option>
              <option value="7-8AM">7 - 8 AM</option>
              <option value="8-9AM">8 - 9 AM</option>
              <option value="5-6PM">5 - 6 PM</option>
            </select>
          </div>
        )}
        <div className="input">
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          
        </div>
        <div className="input">
              <input
                type="number"
                placeholder="Payment"
                id="payment"
                value={formData.payment}
                onChange={handleChange}
              />
              {paymentError && <div className="error">{paymentError}</div>}
            </div>
        <div className="input">
          <input
            type="number"
            placeholder="Age"
            id="age"
            value={formData.age}
            onChange={handleChange}
          />
          {ageError && <div className="error">{ageError}</div>}
        </div>
        
       <div className="forgot-password">
        Lost Password?<span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
            handleSubmit();
          }}
        >
         Yoga Form
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
      {signupSuccess && <div className="success">{signupSuccess}</div>}
      {signupError && <div className="error">{signupError}</div>}
    </div>
 
    </div>
  );
};

export default LoginSignup;
