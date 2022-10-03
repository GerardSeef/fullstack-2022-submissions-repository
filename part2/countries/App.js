import { useState, useEffect} from 'react'
import axios from 'axios';
import { Display } from './Display';


export const App = () => {

  const [ country, setCountry ] = useState([]);
  const [ filterWord, setFilterWord ] =useState(''); 

  useEffect(()=> {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountry(response.data);       
      })
  },[])
  
  const handleFilterChange = (event) => {      
    setFilterWord(event.target.value);
    }
      
  return (
    <div>
      Country to find <input onChange={handleFilterChange}/>          
      { <Display country={country} filterWord={filterWord} /> }        
    </div>    
  );
}


