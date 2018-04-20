import React, { Component } from 'react'
import ThaiMap from '../images/Thai_Map.svg'

export default class PageStatisticGeographic extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div>Geographic</div>
        <img src={ThaiMap} />
      </div>
    )
  }
}
