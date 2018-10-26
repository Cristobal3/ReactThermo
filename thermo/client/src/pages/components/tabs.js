import React from 'react';

 
import NameForm from './form';
import DataForm from './dataForm';
import {Tabs, Tab} from 'material-ui/Tabs';
import { pink400, purple400 } from 'material-ui/styles/colors';

import Paper from 'material-ui/Paper';



const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class ContTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      pressure: 0,
      steamData: 0, 
      interpData: 0,
      choice: '',
      x1: 0,
      x2: 0,
      x3: 0,
      y1: 0,
      y3: 0,
    };
    this.interpolate= this.interpolate.bind(this);
    //this.callApi = this.callApi.bind(this);
  };

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };
  
  callApi = async (url) => {
        const response = await fetch(url);
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      }; 
  

  


interpolate = (type,x1,x2,x3,y1,y3) => {
  console.log('its running')
    if (type==='custom'){
    var result = (((x2-x1)*(y3-y1))/(x3-x1) + y1).toFixed(3);
    console.log(result)
this.setState({
  interpData: result,

});
console.log(this.state.interpData)
} else {
  result = (((x2-x1)*(y3-y1))/(x3-x1) + y1).toFixed(3);
  return result
}
}
  



  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        inkBarStyle={{background: 'cyan'}}
      >
        <Tab 
        label="Steam Table Interpolation" value="a"
        style={{background: pink400}}
        >
          <div>
            <center><h2 style={styles.headline}><b>Specify a Temperature and a Parameter to Interpolate</b></h2></center>
            <Paper zDepth={2}>
            <center>
              
             < DataForm interpolate={this.interpolate} callApi={this.callApi}/>
              <br />
              </center>
            </Paper>
          </div>
        </Tab>
        <Tab label="Custom Interpolation" value="b"
        style={{background: purple400}}
        >
        <Paper zDepth={2}>
          <div>
            
            <div >
            <center> <img alt="missing img" src={require("../img/interp.png")}/></center>
            </div>}
             <center><NameForm interpolate={this.interpolate} callApi={this.callApi}/></center>
             <center> 
             <h3>Result: {this.state.interpData}</h3>
              
              </center>
          </div>
          </Paper>
        </Tab>
      </Tabs>
    );
  }
}