import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PageIndex from './components/pages/page_index';
import PageSearch from './components/pages/page_search';
import ManualSearch from './components/pages/page_manualSearch';
import './App.css';



class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#66d9ff"}}>
        <Switch>
          <Route exact path = "/" component={PageIndex} />
          <Route exact path = "/search" component={PageSearch} />
          <Route exact path = "/search/manual" component={ManualSearch} />
        </Switch>
      
      </div>
    );
  }
}

export default App;
