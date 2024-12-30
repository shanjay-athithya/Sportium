"use client"; // Add this directive at the top of the file

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaUser, FaComment } from "react-icons/fa"; // Importing icons
import Image from "next/image"; // Import Image from next/image

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({}); // Track form validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && (email.endsWith("@ssn.edu.in") || email.includes("@")); // Check for SSN domain as well
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const { name, email, message } = formData;
    let formErrors = {};

    if (!name) formErrors.name = "Name is required.";
    if (!email || !isValidEmail(email)) formErrors.email = "Invalid email address.";
    if (!message) formErrors.message = "Message is required.";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({}); // Clear errors if form is valid

    const serviceID = "service_pufoguj";
    const templateID = "template_wdmolyf";
    const userID = "LQlN1nMISqn7SrhOA";
    const params = {
      ...formData,
      to_email: "kameshnic2885@gmail.com",
    };

    emailjs
      .send(serviceID, templateID, params, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("Failed to send the message. Please try again.");
      });
  };

  return (
    <section className="bg-primaryOrange py-16">
      <div className="container mx-auto px-6 mt-10 mb-10 text-center">
        <h3 className="text-4xl font-extrabold text-darkGrey mb-12">
          <FaEnvelope className="inline-block text-primaryOrange mr-2" /> Contact Us
        </h3>
        <p className="text-gray-700 mb-6">
          We value your feedback. Send us your message, and we’ll get back to you as soon as possible!
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg shadow-md max-w-lg mx-auto"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-darkGrey font-bold mb-2 text-left"
            >
              <FaUser className="inline-block mr-2" /> Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-darkGrey font-bold mb-2 text-left"
            >
              <FaEnvelope className="inline-block mr-2" /> Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-darkGrey font-bold mb-2 text-left"
            >
              <FaComment className="inline-block mr-2" /> Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange ${
                errors.message ? "border-red-500" : ""
              }`}
              rows="5"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-primaryOrange text-white font-bold rounded-md shadow-md hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-6 text-lg text-green-600 font-semibold">{status}</p>
        )}
      </div>
    </section>
  );
}
