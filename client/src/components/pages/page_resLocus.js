import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default class PageResLocus extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLocus: ''
    }

  }

  render(){
    
    return (
      <div>
          
          <Row>
          <Col sm>
          <p>Hi</p>
            <Button>Press </Button>
          </Col>
          <Col>
          <p>Here</p>
          </Col>
          </Row>
       
      </div>
    );

  }
}