import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import _ from 'lodash';

import { Kit_List,
  InvestigatorIDplex,
  PowerPlex16,
  PowerPlex18D,
  AmpFLSTR_Identifiler_Plus,
  Verifiler_Express,
  Globalfiler,
  Forenseq } from '../config/constant';

export default class PageResRegion extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLocus: ''
    }

  }

  renderLocusList(){
    return _.map(Forenseq, Locus => {
      return (
        <li key={Locus}><a href="/resource/locus/"> {Locus}</a></li>
      )
    });
  }

  render(){
    
    return (
      <div>
          
          <Row>
          <Col size="3">
            <ul>
              <li><a href="/resource/region/">North</a></li>
              <li><a href="/resource/region/">South</a></li>
              <li><a href="/resource/region/">East</a></li>
              <li><a href="/resource/region/">West</a></li>
            </ul>
            <Button>Press </Button>
          </Col>
          <Col>
            <Row>
              <Button color="primary">Graph</Button>
              <Button color="info">Chart</Button>
            </Row>
          </Col>
          </Row>
       
      </div>
    );

  }
}