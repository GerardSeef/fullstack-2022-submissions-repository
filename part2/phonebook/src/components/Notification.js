
export const Notification = ({ message, type }) => {

  let textStyle = {};
  if(type  === 'ok' )
  {
    textStyle = {
      color: 'green',
      background: 'lightgrey',
      fontSize: '400',
      borderStyle: 'solid',
      borderRadius: '50 ',
      padding: '20',
      marginBottom: '20',
      textAlign: 'center',
    }
  }
  else
  {
    textStyle = {
      color: 'red',
      background: 'lightgrey',
      fontSize: '400',
      borderStyle: 'solid',
      borderRadius: '50 ',
      padding: '20',
      marginBottom: '20',
      textAlign: 'center',
    }
  }

    if (message === null) {
      return null
    }
  
    return (
      <div className='notification' style={textStyle} >
        {message}
      </div>
    )
  }