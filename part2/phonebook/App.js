import React, { useState } from "react";

export const App = () => {
  const [ person, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {      
      name: newName
    }    
    if(person.find(e => e.name === newName)) {
      alert( ` ${newName} is already added to the Phonebook`)
      setNewName('');
      return
    }
    setPersons(person.concat(personObject));
    setNewName('');
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <div>
          name: <input 
            value={newName}
            onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>     
      <h2>Numbers</h2>
      <div>
        <ul>
          {person.map( person => <li key={person.name}>{person.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

