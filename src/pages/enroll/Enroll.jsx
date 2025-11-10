import React, { useState } from 'react';
import './enroll.scss';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    qualification: '',
    college: '',
    message: '',
    resume: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  // ✅ Cloudinary upload logic
  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    // Handle file upload separately
    if (name === 'resume') {
      const file = files[0];
      if (!file) return;

      const maxSize = 5 * 1024 * 1024; // 5 MB
      if (file.size > maxSize) {
        setStatusMessage('❌ File too large. Please upload a file under 5MB.');
        return;
      }

      setStatusMessage('⏳ Uploading resume... please wait.');

      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'resume_upload'); // replace with your preset name

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/dvhp1uhnb/upload`, // replace with your Cloud name
          {
            method: 'POST',
            body: data,
          }
        );

        const uploadedFile = await res.json();

        if (uploadedFile.secure_url) {
          setFormData({ ...formData, resume: uploadedFile.secure_url });
          setStatusMessage('✅ Resume uploaded successfully.');
        } else {
          throw new Error('Upload failed');
        }
      } catch (err) {
        console.error(err);
        setStatusMessage('❌ Resume upload failed. Try again.');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Send email using EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      setStatusMessage('⚠️ Please upload your resume before submitting.');
      return;
    }

    try {
      const result = await emailjs.send(
        'service_tc88vlc', // your EmailJS service ID
        'template_umi1tp3', // your EmailJS template ID
        formData,
        'WQEe_uuHdWxHxv5JH' // your EmailJS public key
      );

      console.log(result.text);
      setStatusMessage('✅ Thank you! Your enrollment has been successfully submitted.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        qualification: '',
        college: '',
        message: '',
        resume: '',
      });
      e.target.reset();
    } catch (error) {
      console.error(error.text);
      setStatusMessage('❌ Something went wrong! Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="enroll_p">
        <div className="enroll-container">
          <div className="heading-e">
            <h1 className="enroll-title">Enroll Now</h1>
            <p className="enroll-subtitle">Join our program and start your journey today!</p>
          </div>

          <form onSubmit={handleSubmit} className="enroll-form">
            {/* Full Name */}
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your full name"
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Enter your phone number"
                onChange={handleChange}
                maxLength="10"
                required
              />
            </div>

            {/* Qualification */}
            <div className="form-group">
              <label>Highest Qualification</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                placeholder="e.g. B.Tech, M.Sc, etc."
                onChange={handleChange}
                required
              />
            </div>

            {/* College */}
            <div className="form-group">
              <label>College / University Name</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                placeholder="Enter your college or university"
                onChange={handleChange}
                required
              />
            </div>


            {/* Resume Upload */}
            <div className="form-group">
              <label>Upload Resume (PDF / DOC)</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="enroll-btn">Submit</button>

            {/* ✅ Success or Error Message */}
            {statusMessage && (
              <p className="status-message">{statusMessage}</p>
            )}
          </form>
            <Link to="/course"><button>Back to course</button></Link>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Enroll;
