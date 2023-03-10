import React, {useRef} from 'react'

function Child({ name, send, update }) {

    const messageRef = useRef("")
    const nameRef = useRef("")

    function pressButton(){
        const text = messageRef.current.value
        alert(` Text in input : ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }
    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

  return (
    <div style={{backgroundColor:"cyan", padding:"30px"}} >
        <p onMouseOver={()=>console.log("On Mouse Over Bitch")}>
            Hello, {name}
        </p>
        <button onClick={()=> console.log("Botón 1 pulsado")}>
            Botón 1
        </button>
        <button onClick={pressButton}>
            Botón 2
        </button>
        <button onClick={ ()=>pressButtonParams("Hola bebé")}>
            Botón 3
        </button>
        <input onFocus={()=>console.log("input Focus")}
        onChange={(e)=> console.log("Input Change:",e.target.value)}
        placeholder="Send a text to your father"
        ref={messageRef}
        />
        <button onClick={()=>send(messageRef.current.value)}>
            Send Message
        </button>
        <div style={{marginTop:"20px"}}>
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='New Name' type="text" />
                <button type='submit'>Update Name</button>
            </form>
        </div>
    </div>
  )
}

export default Child