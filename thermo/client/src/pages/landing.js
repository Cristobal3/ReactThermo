import AppBar from 'material-ui/AppBar';

import React, {Component} from "react";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red800} from 'material-ui/styles/colors';
import CardxTab from './components/cards'


const muiTheme = getMuiTheme({
    
    appBar: {
      height: 50,
      color: red800,
    },
    
    
  });

const styles = {
    title: {
      cursor: 'pointer',
    },
  };
  

class Landing extends Component {
    
    // state = {
    //     response: ''
    //   };
    //   componentDidMount() {
    //     this.callApi()
    //       .then(res => this.setState({ response: res.express }))
    //       .catch(err => console.log(err));
    //   }
    
    //   callApi = async () => {
    //     const response = await fetch('/api/hello');
    //     const body = await response.json();
    
    //     if (response.status !== 200) throw Error(body.message);
    
    //     return body;
    //   };
    
      render() {
        return (
          <MuiThemeProvider muiTheme={muiTheme}>
          <div>      
    <AppBar title={<center><span style={styles.title}>ThermoPal</span></center>}/>
   <div height="70px"></div> 
    
    <CardxTab/>
  
            
    


    </div>
         </MuiThemeProvider>
        
        );
      }
    

    
        
    };

export default Landing;