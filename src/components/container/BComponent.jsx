import React,{Component} from "react";
import Contacto from "../../models/contact.class";
import  {PropTypes} from 'prop-types';
import ContactData from "./AComponent";

class ContactComponentB extends Component{
    constructor(props){
        super(props);
        this.state = {
            conectado: true,
            cont:0,
        };
        this.conectar = this.conectar.bind(this);
        this.desconectar = this.desconectar.bind(this)
    }
    conectar = () =>{
        this.setState((state) =>{
            return{ conectado: (state.conectado = true)}
        })
    }
    desconectar = () =>{
        this.setState({...this.state, conectado: false});
    }
    render(){
        const { contact } = this.props;
        const { conectado } = this.state;
        return(
            <div>
                <button onClick={this.conectar}>Conectar</button>
                <button onClick={this.desconectar}>Desconectar</button>
                <ContactData contacto = {contact} conectado = {conectado}></ContactData>
            </div>
        )
    }
}
ContactComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
  };
  
  export default ContactComponentB;