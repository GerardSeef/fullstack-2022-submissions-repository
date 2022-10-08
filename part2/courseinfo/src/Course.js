
export const Course = ({course}) => {   
  return(
    course.map(e => {
        return(
          <div key={e.id}>
              <Header name={e.name}  /> 
              <Content parts={e.parts}  /> 
              <Total sum={e.parts}  />
          </div>
          )
      }
    )      
  )
}

const Header = ({ name }) => <h1>{name}</h1> 

const Total = ( {sum} ) => { 
  const total = sum.reduce((suma, value) => suma + value.exercises,0 );     
  return(<strong><p>Total of exercises {total}</p></strong>)  
} 

const Part = (props) => <p >{props.name} {props.exercises} {props.id}</p> 

const Content = ( props ) => 
    props.parts.map((e) => 
        <Part key={e.id} name={e.name} exercises={e.exercises}  />)