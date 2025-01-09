


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitFeedback } from "../store/reducers/feedbackReducer";

const FeedbackForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("India");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid e-mail";
    }
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Please enter a valid number";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(submitFeedback({ firstName, lastName, address, country, email, phone }));
      setFirstName("");
      setLastName("");
      setAddress("");
      setEmail("");
      setPhone("");
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Thank you so much for taking the time!</h2>
      <p className="text-center text-gray-600">Please provide the below details!</p>
      
      <div>
        <label className="block text-gray-700 font-medium">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="John"
          className="w-full p-2 border rounded mt-1"
        />
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium">Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Doe"
          className="w-full p-2 border rounded mt-1"
        />
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium">Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your full Postal Address"
          className="w-full p-2 border rounded mt-1"
        ></textarea>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium">Country:</label>
        <input
          type="text"
          value={country}
          readOnly
          className="w-full p-2 border rounded mt-1 bg-gray-100"
        />
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium">Email ID:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@sample.com"
          className="w-full p-2 border rounded mt-1"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium">Phone Number:</label>
        <div className="flex items-center">
          <span className="p-2 bg-gray-100 border rounded-l">+91</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="1234567890"
            className="w-full p-2 border rounded-r"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
      
      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded font-medium mt-4 hover:bg-green-600"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
