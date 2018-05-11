import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {red800} from 'material-ui/styles/colors';
import {pink800} from 'material-ui/styles/colors';
import {purple800} from 'material-ui/styles/colors';

import Drawer from 'material-ui/Drawer';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar'
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React, {Component} from "react";





const styles = {
    title: {
      cursor: 'pointer',
    },
  };

class AppBarM extends Component {

    handleToggle = () => this.setState({open: !this.state.open});

    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
    }
   render () {
       return (
        <div>      
        <AppBar title={<center><span style={styles.title} 
        >ThermoPal</span></center>}
        iconElementLeft={
            <IconButton tooltip="Directory">
            <ActionHome />
          </IconButton>}
         onLeftIconButtonClick={this.handleToggle}
        />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <AppBar title=""showMenuIconButton={false}/>
                    <MenuItem id="showFooId" >Home</MenuItem>
                    <MenuItem id="showBarId" >Interpolation Page</MenuItem>
                    <MenuItem id="showBarId" >Additional Resources</MenuItem>


                </Drawer>
              </div> 
       )
   } 
    

}
export default AppBarM;