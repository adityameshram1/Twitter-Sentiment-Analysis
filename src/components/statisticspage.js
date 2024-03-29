import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade } from 'reactstrap';
import { AppSwitch } from '@coreui/react'
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import ReactSpeedometer from "react-d3-speedometer"

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
        // this.state = {serverports: []};
      }
      
    //   componentDidMount(){
    //     axios.get('http://localhost:4000/serverport')
    //     .then(response => {
    //       this.setState({ serverports: response.data });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    //   }
    

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
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
                <h6>Tweets (by user) </h6>
            </CardHeader>
            <CardBody>
            <h1>123787</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
              <h6>@mentions (of user)</h6>
            </CardHeader>
            <CardBody>
               <h1>23167</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Replies (to or from user)</h6>
            </CardHeader>
            <CardBody>
                <h1>45435</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Retweets (by user or of user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Likes (by user or of user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Quote Tweets (by user or of user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Follows (by user or of user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Unfollows (by user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Blocks (by user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Unblocks (by user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Direct Messages sent (by user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Direct Messages received (by user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        {/* <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Retweets (by user or of user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Retweets (by user or of user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Retweets (by user or of user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
        <Col xs="12" sm="6" md="3">
            <Card>
            <CardHeader>
               <h6>Retweets (by user or of user)</h6>
            </CardHeader>
            <CardBody>
                <h1>987</h1>
            </CardBody>
            </Card>
        </Col>
         */}
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


// import React, {Component} from 'react';
// // import Modal from 'react-modal';
// export default class StatisticsPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             tweetData: []
//         }
//     }

//     componentDidMount() {
//         let self = this;
//         fetch('/twitter/tweets', {
//             method: 'GET'
//         }).then(function(response) {
//             if (response.status !== 200) {
//                 throw new Error("Bad response from server");
//             }
//             return response.json();
//         }).then(function(data) {
//             self.setState({tweetData: data});
//         }).catch(err => {
//         console.log('caught it!',err);
//         })
//     }

//     render() {
//         return (
//         <div className="container"> 
//             <div className="panel panel-default p50 uth-panel">
//                 <table className="table table-hover">
//                     <thead>
//                         <tr>
//                             <th>Tweet Id</th>
//                             <th>Twitter Handle</th>
//                             <th>Twitter account Name </th>
//                             <th>Tweet Text</th>
//                             {/* <th>Action</th> */}
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {this.state.tweetData.map(tweets =>
//                         <tr key={tweets.tweetid}>
//                         <td>{tweets.tweetid} </td>
//                         <td>{tweets.tweetusername} </td>
//                         <td>{tweets.tweetuserscreenname}</td>
//                         <td>{tweets.tweettext}</td>
//                         {/* <td>{tweets.phone_number}</td>npm  */}
//                         {/* <td><a>Edit</a>|<a>Delete</a></td> */}
//                         </tr>
//                     )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         );
//     }
// }
