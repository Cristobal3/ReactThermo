
import { connect } from "react-redux";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Landing  from "./pages/landing"


function mapStateToProps(state) {
  return {
    customInterp: state.customInterp,
    chosen: state.chosen
  }
}

function mapDispatchToProps(dispatch) {
return {
  Oninterp: (result) => dispatch({
    type: "customInterp",
    customInterp: result
  })
}
}
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


var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

export default connectedComponent;