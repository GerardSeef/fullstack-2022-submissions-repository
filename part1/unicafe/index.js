import React, { useState } from 'react'
import {createRoot} from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)
const Display = (props) => {
  return(
    <table>
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>   
    </table>
  )
}

const Statistics = (props) => {
  
  switch(props.text){
    case 'all':
      if(props.value === 0){
        return(
          <>
            <p>No feedback given</p>
          </>
        );
      }
      else{
        return(
          <>
            <Display text={props.text} value={props.value} />  
          </>
        );
      }
    case 'average':
      if(props.value === 0){
        return(
          <>
            
          </>
        );
      }
      else{
        return(
          <>
            <Display text={props.text} value={props.value} />  
          </>
        );
      }
      case 'positive':
        if(props.value===0){
          return(
            <>
              
            </>
          );
        }
        else{
          return(
            <>
              <Display text={props.text} value={props.value} />  
            </>
          );
        }
      default:
        
  }
};


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);  
  
  const all = good + neutral + bad;
  const avg = all / 3;
  let pos = good + neutral / bad;
  if(all===0){ pos=0;}

  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={()=> {setGood(good + 1)}} text='good' />
      <Button handleClick={()=> {setNeutral(neutral + 1)}} text='neutral' />
      <Button handleClick={()=> {setBad(bad + 1)}} text='bad' />
      <h2>Statistics</h2> 
       
        <Display text='good' value={good} />
        <Display text='neutral' value={neutral} />
        <Display text='bad' value={bad} />
        <Statistics text='all' value={all} />
        <Statistics text='average' value={avg} />
        <Statistics text='positive' value={pos} />      
    
    </>
  );
};

root.render(<App />)
