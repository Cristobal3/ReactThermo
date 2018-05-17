import React, { Component } from "react";
import PopoverM from './popMenu';
var inter = require( '../../actions/interp');
var proper = [];


export default class DataForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          p: 0, //pressure
          vf: 0, //vf
          vg: 0, //vg
          uf: 0, //uf
          ug:0, //ug
          hf:0,
          hfg:0,
          hg:0,
          sf:0,
          sg:0,
          select:'',
          temp: 0,
          result: 0,
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }
   

    handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value});
         
    }
    handleSelect (value){
        this.setState({
            select:value}) 
            
        }
        
    handleSubmit(event) {  
    event.preventDefault();
    let temp = this.state.temp;
    var bounds = inter.interp(Number(temp));
        this.ynchro(bounds)
        
    }
    
    getData = (bounds,callback) => {
        if (bounds.length == 1) {
        let url = '/api/temp/' + bounds[0];  
        
        let stuff = this.props.callApi(url).then((result) =>{ 
           
            console.log(this.state.select)
            this.setState({
                result: 90
            })
            

            
            
            
        })
        
           
        
        }
        else {
            for ( var i=0; i<bounds.length; i++){
                let url = '/api/temp/' + bounds[i];
                this.props.callApi(url).then(function (result)
                {console.log(result)
                proper.push(result);})}
                console.log(this.state.select)
            }
        
        
            
        }
            
    
    useData = function (num) {
        if (num === 1) {
        console.log('2');
        
        
        
        }
    }
   ynchro = (temp) => {this.getData(temp, this.useData)}
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Temperature:
            <input type="text" name="temp" onChange={this.handleChange} />
          </label>
          <center><div>
          <PopoverM handleSelect={this.handleSelect}/>
          </div></center>
          <div>
          <input type="submit" value="Submit" />
          </div>
          <div>
              <h3>Result: {this.state.result}</h3>
              </div>
        </form>
      );
    }
  }