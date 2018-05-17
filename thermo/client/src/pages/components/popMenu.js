import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class PopoverM extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        value: 0

    };
  }

  handleChange = (event, index, value) => {
      this.props.handleSelect(value)
      this.setState({value})
      console.log(value)
    };
  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={false} labelStyle={{background: 'white'}}>
        <MenuItem name="Sl" value={0} primaryText="Select Value" />
        <MenuItem name="p" value={'p'} primaryText="Pressure" />
        <MenuItem name="vf" value={'vf'} primaryText="SatLiq_Vf" />
        <MenuItem name="vg" value={'vg'} primaryText="SatLiq_Vg" />
        <MenuItem name="uf" value={'uf'} primaryText="SatLiq_Uf" />
        <MenuItem name="ug" value={'ug'} primaryText="SatLiq_Ug" />
        <MenuItem name="hf" value={'hf'} primaryText="SatLiq_Hf" />
        <MenuItem name="hfg" value={'hfg'} primaryText="SatLiq_Hfg" />
        <MenuItem name="hg"  value={'hg'} primaryText="SatLiq_Hg" />
        <MenuItem name="sf" value={'sf'} primaryText="SatLiq_Sf" />
        <MenuItem name="sg" value={'sg'} primaryText="SatLiq_Sg" />
      </DropDownMenu>
    );
  }
}