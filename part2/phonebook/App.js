import React, { useState } from 'react'

export const App = () => {
  const [ person, setPersons ] = useState([
    { name: 'Arto Hellas',      number: '+543764485976' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState(''); 
  const [ filterWord, setFilterWord ] =useState('');
 // const [ filteredPersons, setFilteredPersons ] = useState([]);
  

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {      
      name: newName,
      number: newNumber,
    }    
    if(person.find(e => e.name === newName)) {
      alert( ` ${newName} is already added to the Phonebook`)
      setNewName('');
      return
    }
    setPersons(person.concat(personObject));
    setNewName('');
    setNewNumber(''); 
  }
  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberchange = (event) => {
    setNewNumber(event.target.value);
  }
  
  const handleFilterChange = (event) => {      
   setFilterWord(event.target.value);
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <br />
      filter shown in <input onChange={handleFilterChange} />
      <form>
      <div>
          name: <input 
            value={newName}
            onChange={handlePersonChange} />         
        </div>        
        <div>
          <br />          
          number: <input
            value={newNumber}
            onChange={handleNumberchange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          { person
              .filter((person) => {  
                if(filterWord === '') return true;
                  return person.name.toLowerCase().includes(filterWord.toLowerCase());
              })
              .map( person => <li key={person.name}> {person.name} {person.number}</li>) }
        </ul>
      </div>     
    </div>
  )
}

export default App