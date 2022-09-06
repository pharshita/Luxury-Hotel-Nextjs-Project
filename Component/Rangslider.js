import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function Rangeslider() {
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 250, paddingLeft:"20px",color:"#302E2D"}}>
        <div className='d-flex'>
            <p style={{fontSize:"15px"}}>$100</p>
            <p style={{marginLeft:"170px",fontSize:"15px"}}>$1000</p>

        </div>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}