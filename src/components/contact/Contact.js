import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div><br/><br/><br/><br/><br/>
      <div className="text-center my-4">
      <h1>Get connected</h1>
        <p>
        Join the Saarthi Community and Connect with Farmers to Revolutionize Agriculture Together
        </p>
      </div><br/>
    <div className="contact-container">
      {/* Contact Information */}
      <div className="contact-info">
        <h1>Get In Touch</h1>
        <p><strong>📞 Phone:</strong> +91 8107411164</p>
        <p><strong>📧 Email:</strong> jainujjawal234@gmail.com</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        {/* <h2>Send a Message</h2> */}
        <form>
          <label>Your Name</label>
          <input type="text" placeholder="John Smith" required />

          <label>Your Email</label>
          <input type="email" placeholder="name@email.com" required />

          <label>Your Phone</label>
          <input type="tel" placeholder="+91 9090909090" required />

          <label>Subject</label>
          <input type="text" placeholder="Let us know how we can help you" required />

          <label>Your Message</label>
          <textarea placeholder="Type your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
