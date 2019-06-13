import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
const pie = {
    labels: [
      'Likes',
      'Dislikes',
      
    ],
    datasets: [
      {
        data: [28889,1234],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      }],
  };

// const options = {
//     tooltips: {
//       enabled: false,
//       custom: CustomTooltips
//     },
//     maintainAspectRatio: false
//   }






export default class StatisticsPage extends Component {

constructor(props) {
    super(props);
    }
    

render() {
    return(<div>
            <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to={'/resultpage'} className="nav-link">Sentiment Analysis</Link>
                </li>
                <li className="nav-item">
                <Link to={'/statisticspage'} className="nav-link">Statistics</Link>
                </li>
                <li className="nav-item">
                <Link to={'/locationpage'} className="nav-link">Location Analysis</Link>
                </li>
            </ul>
            </div>
        </nav>
        </div> 
        <div>
        <div className="animated fadeIn">
        <Row>
        <Col xs="12" sm="6" md="4">
            <Card>
            <CardHeader>
                Total number of tweets
            </CardHeader>
            <CardBody>
             <h1>3456</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
            <Card>
            <CardHeader>
                Total number of retweets
            </CardHeader>
            <CardBody>
               <h1>23167</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
            <Card>
            <CardHeader>
               Total likes received
            </CardHeader>
            <CardBody>
                <h1>45435</h1>
            </CardBody>
            </Card>
        </Col>
        {/*<Col xs="12" sm="6" md="4">
            <Card>
            <CardHeader>
                Card with switch
                <div className="card-header-actions">
                <AppSwitch className={'float-right mb-0'} label color={'info'} defaultChecked size={'sm'}/>
                </div>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
            <Card>
            <CardHeader>
                Card with label
                <div className="card-header-actions">
                <Badge color="success" className="float-right">Success</Badge>
                </div>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
            <Card>
            <CardHeader>
                Card with label
                <div className="card-header-actions">
                <Badge pill color="danger" className="float-right">42</Badge>
                </div>
            </CardHeader>
            <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </CardBody>
            </Card>
        </Col> */}
        </Row>
        <Row>
        <Col xs="6" sm="6" md="5">
        


        </Col>
        </Row>














        </div>










        </div>
        </div>
        );
    }
}
