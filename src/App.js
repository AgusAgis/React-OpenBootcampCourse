import logo from './logo.svg';
import './App.css';
//import GreetingStyled from './components/pure/greetingStyled';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';
import ContactComponentB from './components/container/BComponent';
import Contact from './models/contact.class';

function App() {
  const contact = new Contact('Alex', 'Perez', 'aperez@gmail.com');
  const contact1 = new Contact('Ramon', 'Aguilar', 'raguilar@gmail.com');
  const contact2 = new Contact('Rosa', 'Meltros...', 'rosa@meltro.so');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <GreetingStyled name="Agustin"></GreetingStyled> */}
       <ContactComponentB contact={contact}></ContactComponentB>
       <ContactComponentB contact={contact1}></ContactComponentB>
       <ContactComponentB contact={contact2}></ContactComponentB>
      </header>
    </div>
  );
}

export default App;
