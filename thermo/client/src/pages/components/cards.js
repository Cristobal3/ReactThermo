
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
      To see the source code click the github link below. If you would like to see examples of interpolation aplied
      click on the appbar logo!
    </CardText>
    <CardActions>
      <a href="https://github.com/Cristobal3/ReactThermo/tree/master/thermo"><FlatButton label="Github" /></a>
      <FlatButton label="More Thermo Stuff" />
    </CardActions>
  </Card>
        )}
};

export default CardxTab;