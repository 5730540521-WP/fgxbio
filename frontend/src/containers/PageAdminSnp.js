import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants'

export default class PageAdminSnp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locusList: [],
      snpSummary: []
    }
  }

  componentDidMount() {
    axios.get(`${BASE_URL}/api/admin/adminsnp`).then(
      function(response) {
        this.setState({ snpSummary: response.data })
      }.bind(this)
    )
  }

  render() {
    return <div>iSNP data</div>
  }
}
