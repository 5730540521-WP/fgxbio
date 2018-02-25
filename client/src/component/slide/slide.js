import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={styles.slide}>
            slide n°2
            <img src="http://blog.hdwallsource.com/wp-content/uploads/2016/02/genetic-dna-widescreen-wallpaper-50091-51778-hd-wallpapers.jpg" styles = {{width: '50%', heigth: '50%' }} />
          </div>
          <div style={styles.slide}>
            slide n°3
            <img src="https://pi.tedcdn.com/r/tedideas.files.wordpress.com/2015/11/jimmy_lin_genetics_davide_bonazzi.jpg?" />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}