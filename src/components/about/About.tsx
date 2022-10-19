import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <h1>About Asaxia</h1>
        <p>
          The main advantage of our company, which supplies household appliances
          and electronics in Uzbekistan, is many years of experience and a
          well-deserved good name. Since its development, the Asaxiy online
          store and its team have tirelessly monitored consumer market demand
          trends, which gives us the opportunity to always be aware of the
          latest technologies and innovative solutions. The company's
          specialists carefully study the desires of our customers, so the
          resource is constantly updated with high-quality novelties that have
          an affordable cost.
        </p>
        <div className="about-buttons">
          <p>The principles of the companay</p>
          <p>Our advantages</p>
        </div>
        <div className="adress">
          <p>"Asaxiy Books" LLC</p>
          <p>Registration: 646439</p>
          <p>TIN: 305829008</p>
          <p>Director: Allayev Firuz Abdunasimovich</p>
        </div>
      </div>
    </div>
  );
};

export default About;
