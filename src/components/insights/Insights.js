import React from 'react'
import main_p from "../../assets/pic_insights/main.png"
import disease from "../../assets/pic_insights/disease.png"
import Grapes from "../../assets/pic_insights/Grapes.png"
import fertigation from "../../assets/pic_insights/fertigation.png"
import weather from "../../assets/pic_insights/weather.png"
import "./Insights.css"

const Insights = () => {
  return (
    <div><br/><br/><br/><br/><br/>
      <div className="text-center my-4">
        <h1>Our Software Products</h1>
        <p>
            Our Mobile App and dashboards have multiple solutions. Checkout the features here.
        </p>
      </div><br/>

      <div className="container">
        <div className="image">
          <img src={main_p}/>
        </div>
        <div className="description">
          <h3>Live Farm Data</h3>
          <p>
          - Live data of all sensors
          </p>
          <p>
          - Positioning of live data in multiple zones, based on crop, stage and soil
          </p>
          <p>
          - Historical data for every sensor values
          </p>
          <p>
          - Important actions to be done
          </p>
        </div>
      </div>

      <div className="container">
        <div className="description" style={{marginLeft:"90px"}}>
          <h3>Irrigation Schedule</h3>
          <p>
          - A precise irrigation schedule based on Crops' type, stage and soil type
          </p>
          <p>
          - Current soil moisture sensors values
          </p>
          <p>
          - Evapotranspiration
          </p>
        </div>
        <div className="image">
          <img src={Grapes} style={{marginRight: "100px"}}/>
        </div>
      </div>

      <div className="container">
        <div className="image">
          <img src={disease}/>
        </div>
        <div className="description">
          <h3>Disease and Pest Prediction</h3>
          <p>
          - Disease and pest prediction based on crop, stage and climate
          </p>
          <p>
          - Spray timing recommendation using delta T
          </p>
          <p>
          - Chemical suggestion with safe-waiting period
          </p>
        </div>
      </div>

      <div className="container">
        <div className="description" style={{marginLeft:"90px"}}>
          <h3>Fertilizer Schedule</h3>
          <p>
          - Precise fertilizer schedule based on soil/petiole test
          </p>
          <p>
          - Recommendations for stage and weekly requirement of doses
          </p>
          <p>
          - Improves the yield and save the cost of cultivation
          </p>
        </div>
        <div className="image">
          <img src={fertigation} style={{marginRight: "100px"}}/>
        </div>
      </div>

      <div className="container">
        <div className="image">
          <img src={weather}/>
        </div>
        <div className="description">
          <h3>Weather Prediction and Daily Report</h3>
          <p>
          - Farm level weather prediction of next 14 days
          </p>
          <p>
          - Hourly weather prediction of next 108 hours
          </p>
          <p>
          - Daily Report of Average Soil moisture, Temperature, humidity min/max and average to make better decision
          </p>
          <p>
          - Evapotranspiration, GDD and VPD 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Insights
