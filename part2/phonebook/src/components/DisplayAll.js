import personsService from '../services/persons';
export const DisplayAll = ({person, personStateChanger }) => {

  const handleDelete = (props) => {
    console.log(props);
    if( window.confirm(`Delete ${props.name} ?` ))
    {
      personsService
        .remove(props.id)
        .then(console.log('Deleted!!!'))
        
        personStateChanger(true);
    }
  }

  const buttonStyle = {
    color: 'blue',
    borderRadius: '50px', 
  }

  return(
    <ul>
      { person.map(person => {
        return(
          <li 
            key={person.id}> {person.name} {person.number}             
            <button onClick={(e) => handleDelete(person, e)} style={buttonStyle}>delete </button> 
          </li>
        )
        })
      }
    </ul>
  )
} 