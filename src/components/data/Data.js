import React from 'react'
import satelite_image from "../../assets/pic_data/satelite_image.png"
import expert from "../../assets/pic_data/expert.png"
import insights from "../../assets/pic_data/insights.png"
import "./Data.css"

const Data = () => {
  return (
    <div><br/><br/><br/><br/><br/>
      <div className="text-center my-4">
      <h1>Data Collection</h1>
        <p>
            Our recommendations and insights run on data.<br/> Fyllo device collects data from below the soil and around the crop to provide actionable items in a<br/> very intuitive to the growers. We are experts in accurate data collection
        </p>
      </div><br/>

      <div className="container">
        <div className="image1">
          <img src={satelite_image}/>
        </div>
        <div className="description" style={{marginRight:"80px"}}>
        <h2>Satellite Data</h2>
          <p>
            We collect data from satellite imagery like NDVI, Leaf area index to provide farm-level intelligence.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="description" style={{marginLeft:"90px"}}>
        <h2>Agronomy Data</h2>
          <p>
          We also collect data from farms from time to time to train our models. This ground data helps us validate our models and collect data for new models.
          </p>
        </div>
        <div className="image2">
          <img src={expert}/>
        </div>
      </div>

      <div className="container">
        <div className="image3">
          <img src={insights}/>
        </div>
        <div className="description">
        <h2>Farm Activities Data</h2>
          <p>
          Apart from this, we analyze the farm activities data provided by farmers through our platform. This helps us analyze the actions being taken at the farm and inputs across the crops and geography.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Data
