import React,{useEffect, useState} from 'react'
import Contacto from "../../models/contact.class"
import ContactComponent from "./ContactComponent"
import ContactForm from "../../components/pure/forms/ContactForm"

const ContactList = () => {

  
    const defaultContact1 = new Contacto("Maria", "Arancibia", "maria.arancibia@gmail.com");
    const defaultContact2 = new Contacto("Diego", "Mujica", "ciudadanovip@hotmail.com");
    const defaultContact3 = new Contacto("Martin", "Castaño", "mr@gmail.com");

    const [contacts, setContact] = useState([defaultContact1, defaultContact2,defaultContact3]);
 

    function deleteContact(contact){
        console.log("Borré contacto", contact)
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1);
        setContact(tempContact)
    }
    function changeState(contact){
        console.log("Cambio conectividad", contact)
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact[index].connected = !tempContact[index].connected
        setContact(tempContact)
    }

    function addContact2(contact){
        console.log("Adding to", contact)
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.push(contact)
        setContact(tempContact)


    }

    return (
   
    <div>
       <div className='col-12'>
          <div className='card'>
              <div className='card-header p-3'>
                <h5>
                  Your Contacts:
                </h5>
              </div>
                 <div className='card-body' data-mdb-perfect-scrollbar="true" style={ {position:"relative", height:"400px"}}>
                        <table >
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Estado</th>
                        
                                </tr>
                            </thead>
                            <tbody>
                            
                                {contacts.map((contact, id)=>{
                                    return(
                                        <ContactComponent
                                        key={id}
                                        contact = {contact}
                                        remove ={deleteContact}
                                        connection = {changeState}
                                        >
                                       </ContactComponent> 
                                        
                                    )}
                                )}


                            </tbody>
                            
                        </table>
                </div>
          </div>

         
        </div>
        <ContactForm add={addContact2}></ContactForm>
    </div>
  )
}

export default ContactList