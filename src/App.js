import logo from './logo.svg';
import './App.css';
//import GreetingStyled from './components/pure/greetingStyled';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
//import Father from './components/container/father';
//import ContactComponentB from './components/container/BComponent';
//import Contacto from './models/contact.class';
//import ClockF from './components/container/tarea2';

function App() {
  // const contact = new Contacto('Alex', 'Perez', 'aperez@gmail.com');
  // const contact1 = new Contacto('Ramon', 'Aguilar', 'raguilar@gmail.com');
  // const contact2 = new Contacto('Rosa', 'Meltros...', 'rosa@meltro.so');
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <GreetingStyled name="Agustin"></GreetingStyled> */}
        {/* <ContactComponentB contact={contact}></ContactComponentB>
        <ContactComponentB contact={contact1}></ContactComponentB>
        <ContactComponentB contact={contact2}></ContactComponentB> */}
        {/* <ClockF></ClockF> */}
      {/* </header> */}
       <TaskListComponent></TaskListComponent>
       {/* <Father></Father> */}
    </div>
  );
}

export default App;
