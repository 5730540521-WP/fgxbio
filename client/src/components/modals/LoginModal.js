import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

export default class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      password: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    });
  }

  onLoginSubmit(event) {
    event.preventDefault();
    var username = this.state.username;
    var password = this.state.password;
    console.log(username);
    console.log(password);
    axios.post('http://localhost:3001/api/auth', {
      username: `${username}`,
      password: `${password}`
    })
    .then(function (response) {
      const user = response.data;
      if(user && user.token){
        localStorage.setItem('user', JSON.stringify(user));
        console.log(localStorage)
        console.log(localStorage.getItem('user'));   
      }
    });
    this.setState({
      username: '',
      password: ''
    })
    
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onLoginSubmit}>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
              </FormGroup>
                <Input type="submit" value="submit" />
             </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
