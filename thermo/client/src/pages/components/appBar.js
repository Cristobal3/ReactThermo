import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


import Drawer from 'material-ui/Drawer';

import MenuItem from 'material-ui/MenuItem';

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
                    <a href="/"><MenuItem id="showFooId" >Home</MenuItem></a>
                    <MenuItem id="showBarId" >Interpolation Page</MenuItem>
                    <MenuItem id="showBarId" >Additional Resources</MenuItem>


                </Drawer>
              </div> 
       )
   } 
    

}
export default AppBarM;