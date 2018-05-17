import React, { Component } from "react"

export default class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          x1: 0,
          x2: 0,
          x3: 0,
          y1: 0,
          y3:0,
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value});
    }
  
    handleSubmit(event) {
        let x1 = Number(this.state.x1);
        let x2 = Number(this.state.x2);
        let x3 = Number(this.state.x3);
        let y1 = Number(this.state.y1);
        let y3 = Number(this.state.y3);
    event.preventDefault();
    this.props.interpolate("custom",x1, x2,x3,y1,y3)
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            x1:
            <input type="text" name="x1" onChange={this.handleChange} />
          </label>
          <label>
            x2:
            <input type="text" name="x2" onChange={this.handleChange} />
          </label>
          <label>
            x3:
            <input type="text" name="x3" onChange={this.handleChange} />
          </label>
          <label>
            y1:
            <input type="text" name="y1" onChange={this.handleChange} />
          </label>
          <label>
            y3:
            <input type="text" name="y3" onChange={this.handleChange} />
          </label>
          <div>
          <input type="submit" value="Submit" />
          </div>
        </form>
      );
    }
  }