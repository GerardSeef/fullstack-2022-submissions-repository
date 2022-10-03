export const Display = (props)=> {
   
  let pais = 
    props.country
      .filter((country => {
        if(props.filterWord === undefined) return true;
          return country.name.toLowerCase().includes(props.filterWord.toLowerCase())
      }))
    
    if(pais.length > 10 ) {
      return(  <p>Too many matches, specify another filter</p>)
    }
    else{
      if(pais.length === 1) {                
        return(
          <div>
            <h1>{pais[0].name}</h1>
            <br/>
            <p>capital {pais[0].capital}</p> 
            <p>population {pais[0].population}</p>
            <br/>
            <h3>languages</h3>
            <ul>
              {pais[0].languages.map(lang =>  <li key={lang.iso639_1}>{lang.name}</li>)}
            </ul>
            <img src={pais[0].flag}  width={120} height={100}/>
          </div>
        )
      }
      else{
        return(
          pais.map(co => <li key={co.numericCode}>{co.name}</li>)
        )
      }
    }
      
      
      
}