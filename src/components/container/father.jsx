import React, {useState} from 'react'
import Child from '../pure/forms/child'

const Father = () => {

    const [name, setName] = useState("Martin")
    
    function showMessage(text){
        alert(`Message received: ${text}`)
    }
    function updateName(newName){
      setName(newName)
    }

  return (
    <div style={{backgroundColor:"tomato", padding:"15px"}} >
        <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}

export default Father;