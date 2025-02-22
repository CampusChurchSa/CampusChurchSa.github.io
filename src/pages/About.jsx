import React from "react";
import "./About.css"; // Make sure to import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2>About Campus Church</h2>
      <p>
        The Campus Church is based in Scottsville, Pietermaritzburg under the
        leadership of Professor/Pastor Shaun Ramroop. We are a vibrant community
        of believers committed to spreading the love of Christ.
      </p>

      <address>
        24 Mercury Cres, Newholme, Pietermaritzburg, 3201
        <br />
        <strong>Contact:</strong> thecampuschurch01@gmail.com
      </address>

      <p>Sunday Service: 7 AM to 9 AM</p>
      <p>Wednesday Fasting and Prayer: 7 PM to 8 PM</p>

      <div className="services">
        <div className="service">
          <h3>Sunday Service</h3>
          <p>Join us for powerful worship and impactful preaching every Sunday.</p>
        </div>
        <div className="service">
          <h3>Wednesday Fasting and Prayer</h3>
          <p>Take part in our midweek fasting and prayer sessions for spiritual renewal.</p>
        </div>
        <div className="service">
          <h3>Acts 2:42 Principle</h3>
          <p>We build our church on the Acts 2:42 principle, focusing on fellowship, breaking of bread, prayer, and the teachings of the apostles.</p>
        </div>
      </div>

      {/* Embed Google Maps Location */}
      <iframe
        title="Campus Church Location"
        src="https://www.google.com/maps/embed/v1/place?q=24+Mercury+Cres,+Newholme,+Pietermaritzburg,+3201&key=YOUR_GOOGLE_MAPS_API_KEY"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default About;
