import logo from './logo.svg';
import './App.css';
import GreetingStyled from './components/pure/greetingStyled';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TaskListComponent></TaskListComponent> */}
        <GreetingStyled name="Agustin"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
