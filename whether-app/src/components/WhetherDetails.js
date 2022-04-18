import React from 'react'
import { Table } from 'react-bootstrap'

function WhetherDetails({whetherDetails}) {
  return (
    <div>
       <Table>
           <thead>
               <tr>
                   <th>Whether Details</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>Temperature</td>
                   <td>{whetherDetails.current.temperature}</td>
                   
               </tr>
               <tr>
               <td>Whether Icon</td>
                <td>{whetherDetails.current.weather_icons[0]}</td>
               </tr>
               <tr>
               <td>Wind Speed</td>
                <td>{whetherDetails.current.wind_speed}</td>
               </tr>
               <tr>
                   <td>Precip</td>
                   <td>{whetherDetails.current.precip}</td>
               </tr>

           </tbody>
        </Table> 
    </div>
  )
}

export default WhetherDetails