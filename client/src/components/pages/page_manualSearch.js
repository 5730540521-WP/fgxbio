import React, { Component } from 'react';
import _ from 'lodash';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { InputGroup, InputGroupAddon, Form, Input } from 'reactstrap';


import GuestNavbar from '../header/GuestNavbar';
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
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input width="5%" placeholder={Locus} />
            </InputGroup>
          )
        });
      case 'PowerPlex16':
        return _.map(PowerPlex16, Locus => {
          return (
            <InputGroup>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input placeholder={Locus} />
            </InputGroup>
          )
        });
      case 'PowerPlex18D':
        return _.map(PowerPlex18D, Locus => {
          return (
            <InputGroup>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input placeholder={Locus} />
            </InputGroup>
        )
      });
      case 'AmpFLSTR_Identifiler_Plus':
      return _.map(AmpFLSTR_Identifiler_Plus, Locus => {
        return (
          <InputGroup>
            <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
            <Input placeholder={Locus} />
          </InputGroup>
        );
      });
      case 'Verifiler_Express':
        return _.map(Verifiler_Express, Locus => {
          return (
            <InputGroup>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input placeholder={Locus} />
            </InputGroup>
          );
      })
      case 'Globalfiler':
        return _.map(Globalfiler, Locus => {
          return (
            <InputGroup>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input placeholder={Locus} />
            </InputGroup>
          );
        });
      case 'Forenseq':
        return _.map(Forenseq, Locus => {
          return (
            <InputGroup>
              <InputGroupAddon addonType="prepend">{Locus}</InputGroupAddon>
              <Input placeholder={Locus} />
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
        <GuestNavbar/>
          Pick A Kit_List: {this.state.currentKit}
        <div>
          <ButtonToolbar>
            <ButtonGroup>          
              {this.renderKitList()}
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        <div>
            <Form inline onSubmit={this.onFormSubmit}>
              <InputGroup>
              {this.renderLocusList()}
              </InputGroup>
              <Button>Submit</Button>
            </Form>
        </div>
      </div>
    )
  }
}