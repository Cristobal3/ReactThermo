
import React, { Component } from "react";
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ContTab from './tabs'



class CardxTab extends Component {

    state = {
        parameter: 0,
        
    }


     tempReqHandler = (event) =>{
    this.setState({parameter: event.target.value});
}
     
    render (){
        return(
  <Card>
    
      <ContTab/>

    <CardText>
      To see the source code click the github link below.
    </CardText>
    <CardActions>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Cristobal3/ReactThermo/tree/master"><FlatButton label="Github" /></a>
      <FlatButton label="More Thermo Stuff" target="_blank" rel="noopener noreferrer" href="https://www.britannica.com/science/thermodynamics"/>
    </CardActions>
  </Card>
        )}
};

export default CardxTab;