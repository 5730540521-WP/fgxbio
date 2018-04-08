import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GuestNavbar from './components/header/GuestNavbar';
import PageIndex from './components/pages/page_index';
import PageSearch from './components/pages/page_search';
import PageManualSearch from './components/pages/page_manualSearch';
import PageResLocus from './components/pages/page_resLocus';
import PageResRegion from './components/pages/page_resRegion';
import './App.css';



class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: "#66d9ff"}}>
        <GuestNavbar/>
        <Switch>
          <Route exact path = "/resource/region" component={PageResRegion} />
          <Route exact path = "/resource/locus" component={PageResLocus} />
          <Route exact path = "/search/manual" component={PageManualSearch} />
          <Route exact path = "/search" component={PageSearch} />
          <Route exact path = "/" component={PageIndex} />
          
        </Switch>

      </div>
    );
  }
}

export default App;
