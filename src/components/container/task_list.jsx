import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Task  from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import TaskForm from '../pure/forms/taskForm'

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENTE);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);


    //Estado del componente
    const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3])
   
   
    const [loading, setLoading] = useState(true)
    //Control del ciclo de vida del componente

    useEffect(()=>{
        console.log("Task state has been modified");
        setLoading(false);
        return () =>{
          console.log("TaskList component is going to unmount")
        }
    },[tasks])
  
    function completeTask(task){
      console.log("Complete this task:", task);
      const index = tasks.indexOf(task);
      const tempTask = [...tasks]
      tempTask[index].completed = !tempTask[index].completed
      //we update the state of the component and it willl update the iteration of the tasks in order to show the task updated//
     setTask(tempTask)
    }

    function deleteTask(task){
      console.log("Delete this task:", task);
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask.splice(index,1);
      setTask(tempTask)

    }

    function addTask2(task){
      console.log("Delete this task:", task);
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask.push(task)
      setTask(tempTask)
    }

    return (
    <div>
       <div className='col-12'>
          <div className='card'>
              <div className='card-header p-3'>
                <h5>
                  Your Tasks:
                </h5>
              </div>
            <div className='card-body' data-mdb-perfect-scrollbar="true" style={ {position:"relative", height:"400px"}}>
              <table >
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  { tasks.map((task, index) => {
                    return(
                      <TaskComponent
                       key={index}
                       task={task}
                       complete={completeTask}
                       remove = {deleteTask}>
                      </TaskComponent>
                    )
                  }
                )}
                </tbody>
              </table>
            </div>
          </div>

         
        </div>
             
            <TaskForm add={addTask2}></TaskForm>
    </div>
  )
}


export default TaskListComponent;
