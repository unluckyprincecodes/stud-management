import '@fontsource/roboto/300.css';
import { useState } from 'react'
import {NativeSelect, InputLabel, Select, MenuItem, Grid, Divider, Tabs, Tab, Box, TextField, Container, Button, Typography} from '@mui/material';
import '../App.css'

const boxStyle = {
  width:"85%",
}
const addons = ["Register Number","Name","Interest 1 Details", "Interest 2 Details"]


function Addons() {
  return (
      <Grid container sx={{color:"#b2f2bb", m:3}}>

        {addons.map((detail)=>(
            <Grid item sm={6} sx={{p:2}}>
              <Typography>{detail}</Typography>
              <TextField id="standard-basic" variant="standard" sx={boxStyle} fullWidth multiline/>
            </Grid>
        ))}
        <Grid item sm={11} sx={{p:2}}>
        <Box textAlign="right">
          <Button variant="contained" sx={{backgroundColor:"#40c057",mt:5}}>Submit</Button>
        </Box>
        </Grid>
      </Grid>
  )
}

export default Addons
