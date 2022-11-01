import React from 'react'
import personsService from '../services/persons';

export const Form = ({person, newName, newNumber, stateChanger, nameStateChanger, numberStateChanger, stateMessage , stateMessageType}) => {
  


  const handleSubmit = (event) => {
    event.preventDefault();
    
    const personObject = {      
      name: newName,
      number: newNumber,
    }    
    if(person.find(ele => ele.name === newName)) {
      let obj = person.find(e => e.name === newName)
      console.log(obj);
      if(window.confirm(` ${newName} is already added to the Phonebook, replace the old number with a new one`))
      {

        personsService
          .update(obj.id, personObject)
          .then(updatedPerson => {
            stateChanger(person.map(n => n.id !== obj.id ? n : updatedPerson))            
            nameStateChanger('');
            numberStateChanger(''); 
            stateMessageType('ok')
            stateMessage(`Updated ${newName}`)
          })
          .catch(error => {
            stateMessageType('error')
            stateMessage(`${error.response.data.error}`)
          })
          setTimeout(() => {
            stateMessage(null)
          }, 3000) 
      }      
    }
    else
    {

      personsService
        .create(personObject)      
        .then(newPerson => {
          stateChanger(person.concat(newPerson))
          nameStateChanger('');
          numberStateChanger(''); 
          stateMessageType('ok')
          stateMessage(`Added ${newName}`)
        })
        .catch(error => {
          stateMessageType('error')
          stateMessage(`${error.response.data.error}`)
          console.log(error.response.data.error, 'response');
        })

        setTimeout(() => {
          stateMessage(null)
          stateMessageType(null)
        }, 3000) 
    }
    
  }

  
  const handleNameChange = (event) => {
    nameStateChanger(event.target.value);
  }
  const handleNumberchange = (event) => {
    numberStateChanger(event.target.value);
  }
  

  return(
    <>
      <form onSubmit={handleSubmit}>
      <div>
          name: <input 
            value={newName}
            onChange={handleNameChange} />         
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
    </>
  )
}