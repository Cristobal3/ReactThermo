import React from 'react';
import PopoverM from './popMenu';
import RaisedButton from 'material-ui/RaisedButton';


import {Tabs, Tab} from 'material-ui/Tabs';
import { red800, pink400, purple400,cyanA200 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  marginLeft: 20,
};

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
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        inkBarStyle={{background: 'black'}}
      >
        <Tab 
        label="Custom Interpolation" value="a"
        style={{background: pink400}}
        >
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <Paper zDepth={2}>
              <TextField hintText="First name" style={style} underlineShow={false} />
             <center>
              <PopoverM style={style}/>
              <RaisedButton label="Primary" primary={true}  />
              </center>
            </Paper>
          </div>
        </Tab>
        <Tab label="Steam Table Interp." value="b"
        style={{background: purple400}}
        >
          <div>
            <h2 style={styles.headline}>Pick a liquid and then enter a temperature </h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or else
              you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}