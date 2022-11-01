import React, { useState, useEffect } from 'react'
import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { SearchFilter } from './components/SearchFilter';
import personsService from './services/persons';
import { Notification } from './components/Notification';
 
export const App = () => {
  const [ person, setPersons ] = useState([]);  
  const [ filterWord, setFilterWord ] =useState('');
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState(''); 
  const [ message, setMessage] = useState(null);
  const [ messageType, setMessageType ] = useState(null);

  
  useEffect(() => {
    personsService
      .getAll()
      .then( initialPersons => {
        setPersons(initialPersons)  
      })      
  }, [])
 
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType} />
      <br />
        <SearchFilter stateChanger={setFilterWord} />        
      <div>
        <Form person={person} newName={newName} newNumber={newNumber} stateChanger={setPersons} 
        nameStateChanger={setNewName} numberStateChanger={setNewNumber} stateMessage={setMessage}
        stateMessageType={setMessageType}/>
      </div>
      <h2>Numbers</h2>
      <div>
        <Filter person={person} filterWord={filterWord} stateChanger={person => setPersons(person)} />        
      </div>     
    </div>
  )
}

export default App