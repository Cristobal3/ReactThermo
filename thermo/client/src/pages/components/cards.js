
import React, { Component } from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ContTab from './tabs'



class CardxTab extends Component {

    state = {
        parameter: 0,
        
    }


    tempReqHandler = (event) =>{
    this.setState({productName: event.target.value});
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
      <FlatButton label="Github" />
      <FlatButton label="More Thermo Stuff" />
    </CardActions>
  </Card>
        )}
};

export default CardxTab;