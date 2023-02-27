import React, { useState } from 'react'
//definimos estilos en constantes

//Estilo para usuario logueado
const loggedStyle = {
    color:"white"
}
//Estilo para usuario NO-logueado
const unloggedStyle = {
    color:"tomato",
    fontWeight : "bold"
}
const GreetingStyled = (props) => {
 //generamos un estado para el componente y asi controlar si el user esta o no logueado
 const [logged, setLogged] = useState(false)

   return (
    <div style={logged ? loggedStyle : unloggedStyle}>
        { logged ? 
            ( <p>Hola, {props.name}</p>)
             :
            (<p>Please, login</p>)}
       
        <button onClick={() =>{
            console.log("boton pulsado")
            setLogged(!logged);
        }}>
            {logged ? "Logout" : "Login"}
        </button>
    </div>
  )
}
export default GreetingStyled;
