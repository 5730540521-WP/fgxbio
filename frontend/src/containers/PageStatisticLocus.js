import React, { Component } from 'react'
import axios from 'axios'
import { Row, Radio } from 'antd'
import LocusStatisticInfo from '../components/LocusStatisticInfo'
import { BASE_URL } from '../constants'

const RadioGroup = Radio.Group

export default class PageStatisticLocus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      LocusList: [],
      LocusList_A: [],
      LocusList_Y: [],
      LocusList_X: [],
      SelectedLocus: '',
      AlleleCount: [],
      dataSummary: []
    }
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/api/resource/locuslist`).then(
      function(response) {
        console.log(response.data)
        var A_list = []
        var Y_list = []
        var X_list = []
        response.data.map(sample => {
          if (sample.DataType == 'A') A_list.push({ Locus: sample.Locus })
          else if (sample.DataType == 'Y') Y_list.push({ Locus: sample.Locus })
          else if (sample.DataType == 'X') X_list.push({ Locus: sample.Locus })
        })

        this.setState({
          LocusList: response.data,
          LocusList_A: A_list,
          LocusList_Y: Y_list,
          LocusList_X: X_list
        })
      }.bind(this)
    )

    axios.get(`${BASE_URL}/api/resource/hetero`).then(
      function(response) {
        console.log(response.data)
        this.setState({ dataSummary: response.data })
      }.bind(this)
    )
  }

  onChange = e => {
    console.log('radio checked', e.target.value)
    axios.get(`${BASE_URL}/api/resource/locusinfo/${e.target.value}`).then(
      function(response) {
        console.log(response.data)
        this.setState({ AlleleCount: response.data })
      }.bind(this)
    )
    this.setState({
      SelectedLocus: e.target.value
    })
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '15px',
      lineHeight: '15px'
    }

    //console.log('state displayinfo ', this.state.AlleleCount)
    //console.log('datasumm', this.state.dataSummary)
    return (
      <div className="container" style={{ backgroundColor: '#ffc53d' }}>
        <Row>
          <br />
          <h1 className="title is-2">
            <strong>
              Full statistic of the haplotype in the database by locus
            </strong>
          </h1>
          <div className="columns">
            <div className="column is-3">
              <br />
              <br />
              <p className="subtitle is-4">
                <strong>Autosomal STR</strong>
              </p>
              <RadioGroup
                onChange={this.onChange}
                value={this.state.SelectedLocus}
              >
                {this.state.LocusList_A.map(locus => (
                  <div className="column is-2">
                    <Radio
                      style={radioStyle}
                      value={locus.Locus}
                      key={locus.locus}
                    >
                      <strong>{locus.Locus}</strong>
                    </Radio>
                  </div>
                ))}
              </RadioGroup>
              <br />
              <p className="subtitle is-4">
                <strong>Y_STR</strong>
              </p>
              <RadioGroup
                onChange={this.onChange}
                value={this.state.SelectedLocus}
              >
                {this.state.LocusList_Y.map(locus => (
                  <div className="column is-2">
                    <Radio
                      style={radioStyle}
                      value={locus.Locus}
                      key={locus.locus}
                    >
                      <strong>{locus.Locus}</strong>
                    </Radio>
                  </div>
                ))}
              </RadioGroup>
              <br />
              <p className="subtitle is-4">
                <strong>X_STR</strong>
              </p>
              <RadioGroup
                onChange={this.onChange}
                value={this.state.SelectedLocus}
              >
                {this.state.LocusList_X.map(locus => (
                  <div className="column is-2">
                    <Radio
                      style={radioStyle}
                      value={locus.Locus}
                      key={locus.locus}
                    >
                      <strong>{locus.Locus}</strong>
                    </Radio>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="column">
              <br />
              <br />
              <br />
              <LocusStatisticInfo
                locus={this.state.SelectedLocus}
                alleleCount={this.state.AlleleCount}
                heteroSummary={this.state.dataSummary}
              />
            </div>
          </div>
        </Row>
      </div>
    )
  }
}
