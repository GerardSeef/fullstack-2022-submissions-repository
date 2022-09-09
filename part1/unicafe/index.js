import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const Button = (props) => (<button onClick={props.handleClick}>{props.text}</button>);

const Display = (props) => {
  console.log(props.text, props.value);
  return(
    <table width={200}>
      <tbody width={1000}>
        <tr>
          <td width={110} >{props.text}</td>
          <td width={110} >{props.value}</td>
        </tr>
      </tbody>   
    </table>
    );
  }

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const avg = props.bad / props.good;
  const pos = props.good / all * 100;

  
  switch(props.text){    
    case 'good': 
    console.log(props.text,props.value);
      return(
        <>
          <Display text={props.text} value={props.value} />
        </>
      )      
    case 'neutral':
      return(
        <>
          <Display text={props.text} value={props.value} />
        </>
      )
    case 'bad':
      return(
        <>
          <Display text={props.text} value={props.value} />
        </>
      )
    case 'stadistics':     
      if (props.good === 0 && props.neutral === 0 && props.bad === 0){    
        return(
          <>
           <p>No feedback given</p>
          </>
        );
      }
      else {
        return(          
          <>
            <Display text='all' value={all} />
            <Display text='average' value={avg} />
            <Display text='positive' value={pos} />
          </>
        );     
      }  
    default:
     
    };

}


const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics text='good' value={good} />
      <Statistics text='neutral' value={neutral} />
      <Statistics text='bad' value={bad} />
      
      <h2>statistics</h2>
      
      <Statistics text='stadistics' good={good} neutral={neutral} bad={bad} />
    </div>
  )

}




root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
