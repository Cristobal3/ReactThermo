
import React, {Component} from "react";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red800} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBarM from './components/appBar'
import CardxTab from './components/cards';
import {row, col} from 'react-bootstrap'



const muiTheme = getMuiTheme({
    
    appBar: {
      height: 50,
      color: red800,
    },
    darkBaseTheme
    
    
  });
      
     const callApi = async (url) => {
        const response = await fetch(url);
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };
      //
      

class Landing extends Component {

    render() {
        let content = null;

        return (
          <MuiThemeProvider muiTheme={muiTheme}>
         <div>


    <AppBarM/>
    <div className="space"></div>
    <CardxTab interp={this.props.Oninterp} customInterp={this.props.customInterp} chosen={this.props.chosen}/>

    </div>
         </MuiThemeProvider>
        
        );
      }
    

    
        
    };

export default Landing;