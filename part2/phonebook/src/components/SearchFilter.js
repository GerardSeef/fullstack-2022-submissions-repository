
export const SearchFilter = ({stateChanger}) => {
  
  const handleFilterChange = (event) => {
    stateChanger(event.target.value)
  }
  
  return(
    <div>
      filter shown in <input onChange={handleFilterChange} />
      <br />
      <p> </p>
    </div>
  )
}