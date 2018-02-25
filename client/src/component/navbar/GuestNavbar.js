import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { FlatButton } from 'material-ui';
import { Popover } from 'material-ui';
import { Menu } from 'material-ui';

class GuestNavbar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoginModalActive:false,
      value: 1,
      ResourceBarOpen: false
    };
  }
    
  handleChange = (event, index, value) => this.setState({value});

  handleClick = (event) => {

    event.preventDefault();

    this.setState({
      ResourceBarOpen: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      ResourceBarOpen: false
    });
  };

  render(){
    return(
      <div>
      
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="FGxBio" />
            <FlatButton primary = {true} label = "Search Database" />
            <FlatButton
              onClick = {this.handleClick}
              label = "Resource"
            />
            <Popover
              canAutoPosition = {true}
              open = {this.state.ResourceBarOpen}
              anchorEl ={this.state.achorEl}
              anchorOrigin= {{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose ={this.handleRequestClose}
            >
              <Menu onChange={this.handleChange}>
                  <MenuItem value={2} primaryText = "Statistic" />
                  <MenuItem value={3} primaryText = "Geographic" />
              </Menu>
            </Popover>
            <DropDownMenu value = {this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Resource" />
              <MenuItem value={2} primaryText="Statistic" />
              <MenuItem value={3} primaryText="Geographic" />
            </DropDownMenu>
          </ToolbarGroup>
          <ToolbarGroup>
            
            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />
            
            <IconMenu
              iconButtonElement={
                <IconButton touch={true}>
                  <NavigationExpandMoreIcon />
                </IconButton>
              }
            >
              <MenuItem primaryText="More Info" />
              <MenuItem primaryText="About" />
              <MenuItem primaryText="Manual" />
            </IconMenu>
            <RaisedButton label="Login" primary={true} />
          </ToolbarGroup>
        </Toolbar>
  </div>
    )

  }
}


export default GuestNavbar;