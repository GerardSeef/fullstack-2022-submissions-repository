import { useState } from "react";
import { Detail } from "./Detail";
export const Display = (props)=> {
  
  const [ country, setCountry ] = useState([]);
  
  let pais = 
    props.country
      .filter((country => {
        if(props.filterWord === undefined) return true;
          return country.name.toLowerCase().includes(props.filterWord.toLowerCase())
      }))
    
    if(pais.length > 10 ) {
      return(  <p>Too many matches, specify another filter</p>)
    }
    else{
      if(pais.length === 1) {     
        return(
          <div>
            <Detail con={pais[0]} />          
          </div> 
        )
      }
      else{
        return(
          pais.map(co => <div key={co.numericCode}><li>{co.name}</li></div>)           
          )
      }
    }
      
      
      
}