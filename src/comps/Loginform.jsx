import '@fontsource/roboto/300.css';
import { useState } from 'react'
import '../App.css'
import {Grid, Box, TextField, Container, Button, Typography} from '@mui/material';

const boxStyle = {
  width:"90%",
}

function Loginform() {
  return (
  <Container sx={{marginTop:"10vh"}} >
    <Typography align="center" variant="h3" color="white">STUDENTS LOGIN FORM</Typography>

    <Container maxWidth="sm" sx={{backgroundColor:"#B2F2BB", height:"60vh", marginTop:"10vh", padding:"8% 0 0 0", width:"40%"}} >
        GCT mail id:<br/><br/>
          <TextField id="outlined-basic" label="Mail ID" variant="outlined" maxWidth="lg" sx={boxStyle}/><br/><br/>
        Register Number:<br/><br/>
          <TextField id="outlined-basic" label="Reg No" variant="outlined" sx={boxStyle}/><br/><br/>
        <Box textAlign="center">
          <Button variant="contained" sx={{backgroundColor:"#40c057"}}>Submit</Button>
        </Box>
    </Container>
  </Container>
  )
}

export default Loginform
