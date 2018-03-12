import React, { Component }from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import GuestNavbar from '../header/GuestNavbar';
import Slider from '../other/slider';

export default class PageIndex extends Component {
  render(){
    return (
      <div>
        <GuestNavbar/>
        <Slider />
      </div>
    )
  }
}