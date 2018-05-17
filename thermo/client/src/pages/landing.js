
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
  



//
// state = {
    //     response: ''
    //   };
    //   componentDidMount() {
    //     this.callApi()
    //       .then(res => this.setState({ response: res.express }))
    //       .catch(err => console.log(err));
    //   }
    
     const callApi = async (url) => {
        const response = await fetch(url);
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };
      //
      

class Landing extends Component {
    

    

    // showBar = () => {
    //     this.setState({show: 'bar', open: false });
    // };

    // showFoo = () => {
    //     this.setState({show: 'foo', open: false });
    // };

    render() {
        let content = null;

        // switch(this.state.show) {
        //     case 'foo':
        //         content = (<Foo/>);
        //         break;

        //     case 'bar':
        //         content = (<Bar/>);
        //         break;

        //     default:
        //         content = <h1>Waiting</h1>
        // }
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