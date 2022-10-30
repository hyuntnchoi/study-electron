import React, { Component } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

class OperationMode extends Component {

  constructor (props) {
    super(props)
    this.state = {
      prod : 'prod01'
    }
  }

  render() {
    console.log(this.state.prod)
    
    const prod = this.state.prod
    const handleProdChange = (e) => {
      this.setState({prod: e.target.value})
    }
    const prodList = ['prod01', 'prod02', 'prod03', '제품01', '제품02', '제품03']

    return (
      <div>
        <h2>운영모드</h2>
        <div>
          <InputLabel id="demo-simple-select-label">제품</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={prod}
            label="Product"
            onChange={handleProdChange}
          >
            <MenuItem value={prodList[0]}>{prodList[3]}</MenuItem>
            <MenuItem value={prodList[1]}>{prodList[4]}</MenuItem>
            <MenuItem value={prodList[2]}>{prodList[5]}</MenuItem>
          </Select>
        </div>
        <div>
          <div>금일통과수량</div>
          <div>100</div>
        </div>
        <div>
          <div>금일검출수량</div>
          <div>30</div>
        </div>
      </div>
    );
  }
}
 
export default OperationMode;