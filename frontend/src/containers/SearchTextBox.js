import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import axios from 'axios'
import { BASE_URL } from '../constants'
const { TextArea } = Input
const FormItem = Form.Item

class SearchTextBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Result: [],
      ResultAmount: '0',
      Minimal: [],
      MinimalAmount: '0'
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var data = []
        var result = values.textinput.replace(/(\r\n|\n|\r)/gm, ' ')
        var x = result.split(' ')
        var y = x.map(row => row.split(':'))
        var z = y.map(locus => locus[1].split(','))
        for (var i = 0; i < y.length; i++) {
          for (var j = 0; j < z[i].length; j++)
            data.push({
              locus: `${y[i][0]}`,
              allele: `${z[i][j]}`
            })
        }
        console.log(data)
        const user = localStorage.getItem('user')
        axios.post(`${BASE_URL}/api/search/manual`, data).then(response => {
          console.log(response.data)
          if (user) {
            this.setState({
              Result: response.data.result,
              ResultAmount: response.data.result.length,
              Minimal: response.data.expect,
              MinimalAmount: response.data.expect.length
            })
          } else
            this.setState({
              ResultAmount: response.data.result.length,
              MinimalAmount: response.data.expect.length
            })
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const user = localStorage.getItem('user')
    return (
      <div style={{ width: '50%' }}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('textinput', {
              rules: [
                { required: true, message: 'Please input your text search!' }
              ]
            })(
              <TextArea
                placeholder="CSF1PO:5,6"
                autosize={{ minRows: 2, maxRows: 6 }}
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Text Search
            </Button>
          </FormItem>
        </Form>
        <div>
          <p>
            There are Total of {this.state.ResultAmount} sample matching in the
            database
          </p>
          <p>The following samples</p>
          {user &&
            this.state.Result.map(sample => (
              <div>
                Sample Year :{sample.Sample_Year} Sample ID : {sample.Sample_ID}
              </div>
            ))}
          <p>
            Expect to match {this.state.MinimalAmount} samples in Minimal Kit
          </p>
          {user &&
            this.state.Minimal.map(sample => (
              <div>
                Sample Year:{sample.Sample_Year} Sample ID : {sample.Sample_ID}
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const WrappedSearchTextBox = Form.create()(SearchTextBox)

export default WrappedSearchTextBox
