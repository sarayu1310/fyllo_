import React from "react";
import terra1 from "../../assets/pic_device/terra1.png"
import topo1 from "../../assets/pic_device/topo1.png"
import "./Device.css"
import { Link } from "react-router-dom";

const Device = () => {
  return (
    <><br/><br/><br/><br/><br/>
      {/* Heading Section */}
      <div className="text-center my-4">
        <h1>Our Hardware Products</h1>
        <p>
          Get the most out of your farm with our innovative IoT platform that
          provides accurate and actionable data insights.
        </p>
      </div>

      <div className="container1">
        <div className="description2">
          <h2>TOPO</h2>
          <h3>Smart Farming for Mid-Sized Farms</h3><br/>
          <h3 style={{fontWeight: "500"}}>Features & Sensor Integration:</h3>
          <p>
          • Enhanced Crop Planning - Personalized recommendations based on soil conditions, crop variety, and growth stage.
          </p>
          <p>
          • Real-Time Alerts - Live sensor-driven irrigation and fertiliser alerts
          </p>
          <p>
          • Weather & Environmental Insights - Localized weather forecasts for proactive decision-making.
          </p>
          <div className="price-container">
            <p className="price1"><strong style={{fontWeight: "bold", fontSize: "25px"}}>₹ 25,000/-</strong> <span className="only-text">only</span></p>
            <Link to="/contact" style={{textDecoration: "none"}}><button className="book-now">Book Now →</button></Link>
          </div>
        </div>
        <div className="image1-device">
          <img src={topo1}/>
        </div>
      </div>

      <div className="container1">
        <div className="image-device">
          <img src={terra1}/>
        </div>
        <div className="description1">
          <h2>TERRA</h2>
          <h3>Advanced Precision Farming for Large-Scale Operations</h3><br/>
          <h3 style={{fontWeight: "500"}}>Features:</h3>
          <p>
          • Comprehensive Crop Management - Includes all Topo features, plus AI-driven predictive analytics for disease and pest management.
          </p>
          <p>
          • Satellite Imagery - High-resolution field monitoring for crop health assessment.
          </p>
          <h3 style={{fontWeight: "500"}}>Advanced Weather Station Integration:</h3>
          <p>
          • Dual-level soil moisture
          </p>
          <p>
          • Soil temperature, air humidity, and air pressure
          </p>
          <p>
          • Leaf wetness and sunlight intensity
          </p>
          <p>
          • Rainfall, wind speed, and wind direction
          </p> 
          <div className="price-container">
            <p className="price1"><strong style={{fontWeight: "bold", fontSize: "25px"}}>₹ 25,000/-</strong> <span className="only-text">only</span></p>
            <Link to="/contact"><button className="book-now">Book Now →</button></Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Device;
