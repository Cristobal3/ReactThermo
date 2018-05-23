import React, { Component } from "react";
import PopoverM from './popMenu';
var inter = require( '../../actions/interp');
var proper = [];


export default class DataForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          units:{'p':'Bars','vf':'m3/kg','vg':'m3/kg','uf':'kj/kg','ug':'kj/kg','hf':'kj/kg','hfg':'kj/kg','hg':'kj/kg','sf':'kj/kg*K','sg':'kj/kg*K'},
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
    console.log(bounds)
    this.ynchro(bounds)
        
    }
    
    getData = (bounds,callback) => {
        console.log(bounds)
        var x,y
        if (bounds.length == 1) {
        let url = '/api/temp/' + bounds[0];  
        
        let stuff = this.props.callApi(url).then((result) =>{ 
           
            let inter = callback(this.state.select, 1, result)
            this.setState({
                result: inter
            })     
        })  
        } else {
            console.log(bounds.length)
            let url = '/api/temp/' + bounds[0];
            let url2 = '/api/temp/' + bounds[1];
            this.props.callApi(url).then((result) =>
                {
                x = result['a'][0];
                return this.props.callApi(url2)
            }).then( (result) => {
            y = result['a'][0];
            let z = callback(this.state.select,2, [x,y]);
            this.setState({
                result: z
            }) ; 
        })}
        
        
            
        }
            
    
    useData =  (select, num, data) => {
        let prope
        switch(select) {
            case 'p':
            prope = 'Pressure'
            break;
            case 'vf':
            prope = 'SatLiq_Vf'
            break;
            case 'vg':
            prope ='SatLiq_Vg'
            break;
            case 'uf':
            prope ='SatLiq_Uf'
            break;
            case 'ug':
            prope = 'SatLiq_Ug'
            break;
            case 'hf':
            prope = 'SatLiq_Hf'
            break;
            case 'hfg':
            prope = 'SatLiq_Hfg'
            break;
            case 'hg':
            prope = 'SatLiq_Hg'
            break;
            case 'sf':
            prope = 'SatLiq_Sf'
            break;
            case 'sg':
            prope = 'SatLiq_Sg'
            break;
        }
        if (num === 1) {
        console.log(data['a'][0][prope]);
        return data['a'][0][prope]
        } else {
            let x1 = data[0]['Temperature'];
            let x2 = this.state.temp;
            let x3 = data[1]['Temperature'];
            let y1 = data[0][prope];
            let y3 = data[1][prope]
            let z = this.props.interpolate(1,x1,x2,x3,y1,y3)
            return z 
        }
    }
   ynchro = (temp) => {this.getData(temp, this.useData)}
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Temperature(Celsius) :
            <input type="text" name="temp" onChange={this.handleChange} />
          </label>
          <center><div>
          <PopoverM handleSelect={this.handleSelect}/>
          </div></center>
          <div>
          <input type="submit" value="Submit" />
          </div>
          <div>
              <h3>Result: {this.state.result} {this.state.units[this.state.select]}</h3>
              </div>
        </form>
      );
    }
  }