import '@fontsource/roboto/300.css';
import { useState } from 'react'
import {NativeSelect, InputLabel, Select, MenuItem, Grid, Divider, Tabs, Tab, Box, TextField, Container, Button, Typography} from '@mui/material';
import '../App.css'

const details = ["Register Number", "Name", "Gender", "Date OF Birth", "12 Cutoff", "Admission Quota", "Religion", "Community (Name)", "Community Type", "Father name","Occupation", "Contact no", "Mother Name", "Occupation", "Contact Number"]
const boxStyle = {
  width:"85%",
}
function Details() {
  return (
    <Grid container sx={{color:"#40c057", m:3}}>
    {details.map((detail)=>(
        <Grid item xl={4} sm={6}>
          <Typography variant="h5">{detail}</Typography>
          <TextField label="Enter" id="standard-basic" variant="standard" sx={boxStyle}/>
        </Grid>
    ))}

    <Grid item sm={5} sx={{p:2,height:"40%"}}>
      <Typography>Permanent Address</Typography>
      <TextField label="Enter " id="standard-basic" variant="standard" size="medium" fullWidth multiline/>
    </Grid>

    <Grid item sm={6} sx={{p:2,height:"40%"}}>
      <Typography>Address for communication</Typography>
      <TextField label="Enter " id="standard-basic" variant="standard" fullWidth multiline/>
    </Grid>

    <Grid item sm={8} sx={{p:2}}>
      <InputLabel htmlFor="select">College Mode</InputLabel>
            <NativeSelect id="select">
            <option value="Hostel">Hostel</option>
            <option value="DayScholar">Day Scholar</option>
            </NativeSelect>
    </Grid>

    <Grid item sm={4} sx={{p:2}}>
      <Button variant="contained" sx={{backgroundColor:"#40c057",mt:5}}>Submit</Button>
    </Grid>

    </Grid>
  )
}

export default Details
