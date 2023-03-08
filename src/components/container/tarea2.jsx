import React, { useEffect, useState } from 'react'
const ClockF = () =>{

    const horaInicial ={
        fecha: new Date()
    }
    const personaInicial = {
         nombre: "Martín",
         apellidos: "San José"
    }
    
    const [edad, setEdad] = useState(0);

    useEffect(()=>{
        const intervalo = setInterval(()=>setEdad(edad+1),1000);
        return () =>{
            clearInterval(intervalo)
        }
    })
 
            return( 
                 <div>
                 <h2>
                  Hora Actual:
                  {horaInicial.fecha.toLocaleTimeString()}
                  </h2>
                  <h3>{personaInicial.nombre} {personaInicial.apellidos}</h3>
                  <h1>Edad: {edad}</h1>
               </div>
            )
        
}

// class Clock extends Component {
//    constructor(props) {
//       super(props);
//       // Estado privado del component
//       this.state = {
//          // Se genera una fecha como estado inicial del componente
//          fecha: new Date(),
//          edad: 0,
//          nombre: "Martín",
//          apellidos: "San José"
//       };
//    }

// //    componentDidMount(){
// //       this.timerID = setInterval (
// //          () => this.tick(), 1000
// //       );
// //    }
// //    componentWillUnmount() {
// //       clearInterval (this.timerID);
// //    }
//    render() {
//       return (
//          <div>
//          <h2>
//          Hora Actual:
//          {horaInicial.fecha.toLocaleTimeString()}
//          </h2>
//          <h3>{personaInicial.nombre} {personaInicial.apellidos}</h3>
//          <h1>Edad: {personaInicial.edad}</h1>
//          </div>
//       )
//    }
// //    tick(){
// //       this.setState((prevState) => {
// //          let edad = prevState.edad +1;
// //          return {
// //             ...prevState,
// //             fecha: new Date(),
// //             edad
// //          }
// //       });
// //    }
// }
export default ClockF;