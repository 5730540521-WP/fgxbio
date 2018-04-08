import React, { Component }from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

import Slider from '../other/slider';
/*
<Container>
        <Jumbotron>
          <h1 className="display-3">FGxBio</h1>
          <p className="lead">The Database for Forenseq Science</p>
          <hr className="my-2" />
          <p>For more information please contact ... </p>
          <p className="lead" >
            <Button color="primary">Learn More </Button>
          </p>
        </Jumbotron>
        </Container>
*/
export default class PageIndex extends Component {
  render(){
    return (
      <div>
        <Slider/>
      </div>
    )
  }
}