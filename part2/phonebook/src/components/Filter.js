import { useState } from "react";
import { DisplayAll } from "../components/DisplayAll";
import { DisplaySingle } from "../components/DisplaySingle";
import personsService from '../services/persons';

export const Filter = ({person, filterWord, stateChanger, ...porps}) => {
  const [ personChild, setPersonChild  ] = useState(false)
 
  if(personChild === true )
  {    
    personsService
      .getAll()
      .then(response => {      
        stateChanger(response)
      })  
      setPersonChild(false)
  }
    
  if(filterWord === '') {
    return (
      <DisplayAll person={person} personStateChanger={setPersonChild} />
    )
  }
  else{
    const filterPerson = person.filter((person) => {      
      console.log(person, 'valor de person')
        return person.name.toLowerCase().includes(filterWord.toLowerCase());
      })
    if ( filterPerson.length >1)
    {
      return(
        <DisplayAll person={filterPerson} personStateChanger={setPersonChild}  />
      )
    }
    else
    {
      if(filterPerson.length === 1)
      {
        return(
          <DisplaySingle person={filterPerson} />
        )
      }      
    }
    
  }
}