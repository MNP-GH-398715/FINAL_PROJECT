import { Box, TextField } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Addbook = () => {
  return (
    <div>
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      
    >
            <h4>ADD BOOK</h4>
            <div>
        <TextField id="outlined-basic" label="BookName" variant="outlined" />
    </div>
     <div>
     <TextField id="filled-basic" label="Author" variant="filled" />
        </div> 
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"style={{marginTop:'5%'}}>Book Type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="ShortStore" control={<Radio />} label="Short Story" />
        <FormControlLabel value="noval" control={<Radio />} label="Noval" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>
      <div>
      <TextField id="standard-basic" label="Author" variant="standard" />

      </div>
      
    </Box>
    </div>
  )
}

export default Addbook