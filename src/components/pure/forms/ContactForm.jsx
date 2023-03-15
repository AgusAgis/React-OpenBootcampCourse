import React, { useRef } from 'react'
import PropTypes from "prop-types"
import Contacto from '../../../models/contact.class';

function ContactForm({add}){

    const nombreRef = useRef("");
    const apellidoRef = useRef("");
    const mailRef = useRef("");
  
    function addContact(e){
        e.preventDefault();
        const nuevoContact = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            mailRef.current.value
           )
           add(nuevoContact)
        }
   
            return(
                <form onSubmit={addContact} className="d-flex justify-content-center align-items-center mb-4">
                    <div className='form-outline flex-fill'>
                    <input ref={nombreRef}  id="nombreInput" type="text" placeholder='Nombre'  className='form-control form-control-lg' required autoFocus/>
                    <input ref={apellidoRef} id="apellidoInput"  type="text" placeholder='Apellido'  className='form-control form-control-lg' required autoFocus/>
                    <input ref={mailRef}  id="emailInput" type="text" placeholder='Email' className='form-control form-control-lg' required autoFocus/>
                    </div>
                    <button type='submit' className='btn btn-success btn-lg ms-2'>Agregar Nuevo Contacto</button>
                </form>
            )
            }
export default ContactForm;
ContactForm.propTypes = {
    add: PropTypes.func.isRequired
 }