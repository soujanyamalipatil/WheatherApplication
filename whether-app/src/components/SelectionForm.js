import { Button, FormControl, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'




function SelectionForm({setresponse,setcountryDetails}) {
    const [countryName, setcountryName] = useState('');
    
    
    const handleSubmit=async(event)=>{
        console.log(countryName);
        event.preventDefault();
        const url=`https://restcountries.com/v3.1/name/${countryName}`
     
        const details=await axios.get(url)
        const data=await details.data;
        console.log(details)
        const originalData=data[0];
        console.log(originalData);
        if(details.statusText==='OK'){
           setcountryDetails(originalData);
           setresponse(true);
        }
    }
  return (

        <div>
      <FormControl   variant='outlined' sx={{marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>
         <TextField variant='outlined' margin='normal' required label='Country Name' placeholder='Country Name'onChange={(e)=>setcountryName(e.target.value)} value={countryName} name="countryName" title='countryName'
         inputProps={{ "data-testid": "content-input" }}/> 
          {countryName?<Button variant='outlined' sx={{mt:5}} title="countryBtn" onClick={handleSubmit}>CountryDetails</Button>:''}
        </FormControl>  
      
       
    </div>
 
  )
}

export default SelectionForm