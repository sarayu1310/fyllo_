import React, { useState } from 'react';
import photo1 from "../../assets/pic/photo1.jpg.png";
import photo2 from "../../assets/pic/photo2.jpg.jpg";
import photo3 from "../../assets/pic/photo3.jpg.png";
import terra from "../../assets/pic_device/terra.png"
import founder1 from "../../assets/founders/founder1.jpg"
import founder2 from "../../assets/founders/founder2.jpg"
import founder3 from "../../assets/founders/founder3.jpg"
import { Link } from "react-router-dom";
import "./Main.css";

const CardsData = [
  {
    id: 1,
    img: terra,
    title: 'Device',
    desc: 'Fyllo device installed at the farm captures data from soil, climate and crop canopy and sends it to Fyllo server',
    route: "/device",
  },
  {
    id: 2,
    img: photo2,
    title: 'Data',
    desc: 'Farm data from the device gets processed using proprietary analytics algorithms on our cloud server ',
    route: "/data",
  },
  {
    id: 3,
    img: photo3,
    title: 'Critical Insights',
    desc: 'Insights on growing the best quality crops are sent to mobile App and Dashboards',
    route: "/insights",
  },
];

const Main = () => {
  // const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="main-container">
      <h1 className="heading">How It Works</h1>
      {/* Cards Section */}
      <div className="cards-container">
        {CardsData.map(({ id, img, title, desc, route }) => (
          <div key={id} className="card">
            <img src={img} alt={title} className="card-img" />

            {/* Overlay Section */}
            <div className="overlay">
              <h3 className="card-title">{title}</h3>
              <p className="card-desc">{desc}</p><br></br>
              {/* <button className="view-button">View</button> */}
              <Link to={route} className="view-button">View</Link>
            </div>
          </div>
        ))}
      </div>
      <div className='number-container'>
        <div className='quality'>
          <h1>80%</h1>
          <p>Export Quality Produce</p>
        </div>
        <div className='quality'>
          <h1>20%</h1>
          <p>Increase in Production</p>
        </div>
        <div className='quality'>
          <h1>25%</h1>
          <p>Reduction In Input Cost</p>
        </div>
        <div className='quality'>
          <h1>33%</h1>
          <p>Reduction In Water Usage</p>
        </div>
      </div>
      <div>
        <h1 className="heading1">About Us</h1>
        <p className='heading1-p'><strong>At Saarthi</strong>, we are committed to revolutionising the agricultural sector by empowering farmers with technology-driven solutions and data-backed insights.<br/> We aim to make farming more efficient, sustainable, and profitable by integrating smart crop planning, precision farm management, expert guidance, and seamless market access.<br/>
          We leverage satellite imagery, IoT-based sensors, and historical data to help farmers make informed decisions, optimise resources, and improve crop yields.<br/> Beyond technology, we ensure that farmers can access the right seeds, fertilisers, government schemes, and expert support to tackle challenges in real time.<br/> Additionally, we help farmers monetise carbon credits and connect with retailers and global traders, creating a more sustainable and economically viable farming ecosystem.<br/><br/>
          <h2 className='heading1-h2'>Mission and Vision:</h2>
          At Saarthi, we aim to bridge the gap between traditional farming practices and modern agricultural advancements,<br/> enabling farmers to grow smarter, earn better, and cultivate a future where technology and sustainability go hand in hand<br/>
          We believe that technology and knowledge should be accessible to every farmer, enabling them to cultivate not just crops but a better future 🌱🚜
        </p>
      </div>
      <div>
        <h1 className='heading2'>Our Founders</h1>
        <div className='card-container1'>
          <div className="card1">
            <img src={founder1} alt="Founder 1" className="founder-img" />
            <h2 className="founder-name">Ujjawal Jain</h2>
          </div>
          <div className="card1">
            <img src={founder2} alt="Founder 2" className="founder-img" />
            <h2 className="founder-name">Swaraj Yadav</h2>
          </div>
          <div className="card1">
            <img src={founder3} alt="Founder 3" className="founder-img" />
            <h2 className="founder-name">Unnat Agarwal</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
