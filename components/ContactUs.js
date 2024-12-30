import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_pufoguj";
    const templateID = "template_wdmolyf";
    const userID = "LQlN1nMISqn7SrhOA";
    const params = {
      ...formData,
      to_email: "sportiumssn@gmail.com",
    };

    emailjs
      .send(serviceID, templateID, params, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
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
          Contact Us
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
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-darkGrey font-bold mb-2 text-left"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryOrange"
              rows="5"
            />
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
};

export default ContactUs;
