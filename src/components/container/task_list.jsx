import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Task  from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    //Estado del componente
    const [tasks, setTask] = useState([defaultTask])
    const [loading, setLoading] = useState(true)
    //Control del ciclo de vida del componente

    useEffect(()=>{
        console.log("Task state has been modified");
        setLoading(false);
        return () =>{
          console.log("TaskList component is going to unmount")
        }
    },[tasks])
  
    const changeCompleted = (id) =>{
      console.log('TODO: Cambiar estado de una tarea')
    }

    return (
    <div>
       <div>
        Your Tasks:
       </div>
       {/* TODO Aplicar un for/map para renderizar la lista de tareas*/}
       <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}


export default TaskListComponent;
