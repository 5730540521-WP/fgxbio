import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

import GuestNavbar from '../header/GuestNavbar';


export default class PageSearch extends Component {

  render() {
    return (
      <div>
        <GuestNavbar/>
        <div>
            <h5>We provide our search function for you to compare the data you have with the database</h5>
        </div>
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
          <span>
            <h5>The format for the excel file can be found here</h5>
          </span>
          <span>
            <Button color="primary">Sample Excel</Button>
          </span>
        </div>
      </div>
    );
  }
}