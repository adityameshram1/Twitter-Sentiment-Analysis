import React, { Component } from 'react';
import axios from 'axios';
import ReactSpeedometer from "react-d3-speedometer"
import './resultpage.css';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
const myDataSource = {
  "chart": {
      "caption": "Total Positive Tweets",
      "subCaption": "Comparison by Male and Female",
      "xAxisName": "",
      "yAxisName": "Total Tweets",
     
      "theme": "gammel"
  },
  "data": [
      {
          "label": "Male",
          "value": "290"
      },
      {
          "label": "Female",
          "value": "60"
      }
  ]
};

const myDataSource2 = {
  "chart": {
      "caption": "Total Negative Tweets",
      "subCaption": "Comparison by Male and Female",
      "xAxisName": "",
      "yAxisName": "Total Tweets",
     
      "theme": "gammel"
  },
  "data": [
      {
          "label": "Male",
          "value": "120"
      },
      {
          "label": "Female",
          "value": "34"
      }
  ]
};

const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

const chartConfigs2 = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource2,
};

class ResultPage extends Component {

  constructor(props) {
      super(props);
      
    }
    

    render() {
      return (<div>
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/resultpage'} className="nav-link">Sentiment Analysis</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/locationpage'} className="nav-link">Location Analysis</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div> 

        {/* <div class="container meter">
          <div class="row">
            <div class="col">
            <div>
         <ReactSpeedometer
              value={888}
              needleColor="black"
              needleTransitionDuration={500}
              needleTransition="easeLinear"
              currentValueText="Total Positive Tweets: ${value}"
              height={300}
              width={500}
          />

        </div>
            </div>
            <div class="col">
            <div>
        <ReactSpeedometer
            value={333}
            needleColor="black"
            needleTransitionDuration={500}
            needleTransition="easeLinear"
            currentValueText="Total Negative Tweets: ${value}"
            height={300}
            width={500}
        />

        </div>
            </div>
          </div>
          
          </div>

          <div class="container bar-chart">
          <div class="row">
            <div class="col">
              <div>
                <ReactFC {...chartConfigs} />,
              </div>
            </div>
            <div class="col">
              <div>
                <ReactFC {...chartConfigs2} />,
              </div>
            </div>
          </div>
          
          </div> */} 


<div class="container">
            <div class="row">
                <div class="col">

                    <ReactSpeedometer
                    value={888}
                    needleColor="black"
                    needleTransitionDuration={500}
                    needleTransition="easeLinear"
                    currentValueText="Total Positive Tweets: ${value}"
                    height={300}
                    width={500}
                    />
                
                </div>
                <div class="col">      
                
                    <ReactSpeedometer
                    value={333}
                    needleColor="black"
                    needleTransitionDuration={500}
                    needleTransition="easeLinear"
                    currentValueText="Total Negative Tweets: ${value}"
                    height={300}
                    width={500}
                    />  
                
                </div>
            </div>
</div>

            <div class="row">
              <div class="col">
                    <ReactFC {...chartConfigs} />
              </div>
              <div class="col">
                    <ReactFC {...chartConfigs2} />
              </div>
            </div>
          </div>

        );
    }
  }

  export default ResultPage;