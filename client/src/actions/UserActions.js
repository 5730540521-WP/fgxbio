import axios from 'axios';
import { API_URL } from '../constants/ConfigConstants';

import { authHeader, history } from 'helpers';

export const userActions = {
  login,
  logout
}

async function login(username, password){
  const data = {
    username,
    password
  }

  const res = await axios.post(API_URL + '/api/auth', data)
  .catch(err => {
    console.log(err);
    return failure(err);
  });

  const user = res.data;
  if(user && user.token){
    localStorage.setItem('user', JSON.stringify(user));
    console.log(localStorage.getItem('user'));
    history.push('/');
    return success(user);
  }
}


async function logout() {
  localStorage.removeItem('user');
  return {
    type: userConstants.LOGOUT 
  };
}

