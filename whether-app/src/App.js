import { useState } from 'react';
import './App.css';
import CountryDetails from './components/CountryDetails';
import SelectionForm from './components/SelectionForm';
import WhetherDetails from './components/WhetherDetails';

function App() {
  const [response, setresponse] = useState(false);
 const [whetherResponse, setwhetherResponse] = useState(false);
 const [countryDetails, setcountryDetails] = useState({});
 const [whetherDetails, setwhetherDetails] = useState({});
  return (
    <div className="App">
    {whetherResponse?<WhetherDetails whetherDetails={whetherDetails}/>:response?<CountryDetails countryDetails={countryDetails} setwhetherDetails={setwhetherDetails} setwhetherResponse={setwhetherResponse}/>:<SelectionForm setresponse={setresponse} setcountryDetails={setcountryDetails}/>}
    </div>
  );
}

export default App;
