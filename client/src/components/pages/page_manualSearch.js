import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Container, Row, Col, InputGroup, InputGroupAddon, Form, FormGroup, Input } from 'reactstrap';


import { Kit_List,
  InvestigatorIDplex,
  PowerPlex16,
  PowerPlex18D,
  AmpFLSTR_Identifiler_Plus,
  Verifiler_Express,
  Globalfiler,
  Forenseq } from '../config/constant';

export default class PageManualSearch extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentKit: 'InvestigatorIDplex'
    };
  }
  
  renderKitList(){
    return _.map(Kit_List, Kit => {
      return (
        <Button onClick={() => this.setState({currentKit: Kit})} color="primary" key={Kit} >{Kit}</Button>
      )
    });
  }

  renderLocusList(){
    //state current selecting kit to rener locus list
    switch(this.state.currentKit) {
      case 'InvestigatorIDplex':
        return _.map(InvestigatorIDplex, Locus => {
          return (
            <InputGroup>
              <Col>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input type="text" size="3" name={Locus} id={Locus} />
              </Col>
            </InputGroup>
          )
        });
      case 'PowerPlex16':
        return _.map(PowerPlex16, Locus => {
          return (
            <InputGroup>
              <Col>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input type="text" size="3" name={Locus} id={Locus} />
              </Col>
            </InputGroup>
          )
        });
      case 'PowerPlex18D':
        return _.map(PowerPlex18D, Locus => {
          return (
            <InputGroup>
              <Col>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input type="text" size="3" name={Locus} id={Locus} />
              </Col>
            </InputGroup>
        )
      });
      case 'AmpFLSTR_Identifiler_Plus':
      return _.map(AmpFLSTR_Identifiler_Plus, Locus => {
        return (
          <InputGroup>
              <Col>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input type="text" size="3" name={Locus} id={Locus} />
              </Col>
            </InputGroup>
        );
      });
      case 'Verifiler_Express':
        return _.map(Verifiler_Express, Locus => {
          return (
            <InputGroup>
              <Col>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input type="text" size="3" name={Locus} id={Locus} />
              </Col>
            </InputGroup>
          );
      })
      case 'Globalfiler':
        return _.map(Globalfiler, Locus => {
          return (
            <InputGroup>
              <Col>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input type="text" size="3" name={Locus} id={Locus} />
              </Col>
            </InputGroup>
          );
        });
      case 'Forenseq':
        return _.map(Forenseq, Locus => {
          return (
            <InputGroup>
              <Col>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input type="text" size="3" name={Locus} id={Locus} />
              </Col>
            </InputGroup>
          );
        });
    }
  }

  onFormSubmit(event) {
   
  }

  render(){
    return(
      <div>
         
        <div>
          <Container>
          <p className="text-primary">Pick A Kit_List: {this.state.currentKit} </p>
          <Row>
          <ButtonToolbar>
            <ButtonGroup>          
              {this.renderKitList()}
            </ButtonGroup>
          </ButtonToolbar>
          </Row>
          </Container>
        </div>
        <div>
            <Form inline onSubmit={this.onFormSubmit}>
              <Container>
              <Row>
              <InputGroup>
              {this.renderLocusList()}
              </InputGroup>
              </Row>
              
              <Button>Submit</Button>
              </Container>
            </Form>
        </div>
      </div>
    )
  }
}