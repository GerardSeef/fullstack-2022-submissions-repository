export const DisplaySingle = ({person}) => {  
  return(
    <>
      <p> Name:  {person[0].name} </p>
      <p> Number: {person[0].number} </p>       
    </>
  )
}