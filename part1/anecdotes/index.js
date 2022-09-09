import React, {useState} from 'react'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root'); 
const root = createRoot(container);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votos, setVotos] = useState([0,0,0,0,0,0])
  
  const setSelVote = () => {
    const copy = [...votos];
    copy[selected] += 1;
    setVotos(copy);    
  }
  
  //let max = Math.max(...votos);
  return(
    <div>
      <h1>Anecdote of the day!</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votos[selected]} votes</p>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} >
        Next Anecdote
      </button>  
      <button onClick={() => setSelVote()}>
        Vote Anecdote
      </button> 
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[votos.indexOf(Math.max(...votos))]}</p>
    </div>
  )
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];
console.log(anecdotes);
root.render(<App anecdotes={anecdotes} />)