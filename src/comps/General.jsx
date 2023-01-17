import '@fontsource/roboto/300.css';
import { useState } from 'react'
import {NativeSelect, InputLabel, Select, MenuItem, Grid, Divider, Tabs, Tab, Box, TextField, Container, Button, Typography} from '@mui/material';
import '../App.css'
import Details from './Details'
import Personal from './Personal'
import Scholarship from './Scholarship'
import Addons from './Addons'



const boxStyle = {
  width:"85%",
}



function General() {
  let component;

  const [value, setValue] = useState(0)
  const click = (num) => {
    setValue(num);
    console.log(value)
  }

  switch(value){
    case 0:
      component = <Details />
      break;
    case 1:
      component = <Personal />
      break;
    case 2:
      component = <Scholarship />
      break;
    case 3:
      component = <Addons />
      break;
  }

  return (
  <Container sx={{marginTop:"3vh",width:"160vh",height:"140vh"}} >
    <Typography align="center" variant="h3" color="white">STUDENTS DETAILS FORM</Typography>
        <Container sx={{height:"auto",backgroundColor:"white",marginTop:"5vh",paddingBottom:"10%"}}>

        <Grid container>
          <Grid item xs={2}>
                    <Box orientation="vertical">
                        <Tabs value={value} orientation="vertical" sx={{mt:2 , fontWeight:"strong"}}>
                          <Tab label="GENERAL DETAILS" onClick={()=>{setValue(0)}}/>
                          <Tab label="PERSONAL DETAILS" onClick={()=>{setValue(1)}}/>
                          <Tab label="SCHOLARSHIP DETAILS" onClick={()=>{setValue(2)}}/>
                          <Tab label="ADDONS" onClick={()=>{setValue(3)}}/>
                        </Tabs>
                    </Box>
          </Grid>

          <Grid item xs={10}>

            <Box sx={{border:"2px solid #40c057", borderRadius:"20px", height:"auto", mt:2, mx:3, width:"95%"}}>
                {component}
            </Box>
          </Grid>
      </Grid>

      </Container>

  </Container>
    )
  }

export default General
