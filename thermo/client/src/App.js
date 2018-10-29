
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

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

export default connectedComponent;