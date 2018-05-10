import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ContTab from './tabs'
const CardxTab = () => (
  <Card>
    <CardTitle title="Interpolation Tabs" subtitle="Card subtitle" />
   
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
);

export default CardxTab;