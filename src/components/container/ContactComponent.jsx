import React,{useEffect} from "react";
import "../../styles/task.scss"
import Contacto from "../../models/contact.class"
import PropTypes from 'prop-types'


function ContactComponent({contact, remove, connection}) {

    function online(){
        if(contact.connected){
            return( <i onClick={()=>connection(contact)} className='bi-toggle-on task-action' style={{color:"green"}}></i>)
            }else{
                return(<i onClick={()=>connection(contact)} className='bi-toggle-off task-action'style={{color:"grey"}}></i>)
            } 
        }

  return (
    <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.nombre }</span>
                                
            </th>
            <td className='align-middle'>
                <span>{ contact.apellido }</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email }</span>
            </td>
            <td className='align-middle'>
                {online()}
                <i className='bi-trash task-action' onClick={()=>remove(contact)} style={{color:"tomato"}}></i>
            </td>
            
        </tr>

  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto).isRequired,
    remove:PropTypes.func.isRequired,
    connection:PropTypes.func.isRequired
    }
export default ContactComponent