import axios from 'axios'
import React from 'react'
import { Button, Table } from 'react-bootstrap'

function CountryDetails({countryDetails,setwhetherDetails,setwhetherResponse}) {
    const handleClick=async()=>{
        console.log("button triggered");
        const capital=countryDetails.capital[0];
        console.log(capital)
        const url=`http://api.weatherstack.com/current?access_key=9ed1bb091669110d5b826c0b15e9d181&query=${capital}`
        const whetherData=await axios.get(url)
        const whetherDetails=whetherData.data
        console.log(whetherDetails);
        setwhetherDetails(whetherDetails)
        setwhetherResponse(true);
    }
  return (
    <div>
         <div>
         <Table>
             <thead>
                 <tr>
                     <th>Country Details</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>Capital</td>
                     <td>{countryDetails.capital}</td>
                 </tr>
                 <tr>
                    <td>Population</td>
                    <td>{countryDetails.population}</td>
                 </tr>
                 <tr>
                     <td>lattitude</td>
                    <td>{countryDetails.latlng[0]}</td> 
                 </tr>
                 <tr>
                     <td>longitude</td>
                    <td>{countryDetails.latlng[1]}</td> 
                 </tr>
                 <tr>
                     <td>Flag</td>
                     <td>{countryDetails.flag}</td>
                 </tr>
                 <tr>
                     <td>Image URL</td>
                     <td>{countryDetails.flags.png}</td>
                 </tr>
             </tbody>
         </Table>
         </div>
         <Button name="whetherBtn" title="whetherBtn" onClick={handleClick}>CapitalWhether</Button>
    </div>
  )
}

export default CountryDetails