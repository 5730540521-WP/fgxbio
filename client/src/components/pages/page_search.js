import React, { Component } from 'react';
import { Container, Row, Col, Button, Input } from 'reactstrap';



export default class PageSearch extends Component {

  render() {
    return (
      <div align="center">
        <Container>
          <p>We provide our search function for you to compare the data you have with the database</p>
        <div>
        <Button 
          color="success" 
        >Search using your excel file with specific format</Button>
        </div>
        <div>
        <Button 
          color="primary" 
          href="/search/manual/"
        >Manually enter the haplotype / haplotypes to search</Button>
        </div>
        <div>
        <p>The format for the excel file can be found here</p>
        <Button color="info">Sample Excel</Button>
        </div>
        </Container>
      </div>
    );
  }
}