import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Task from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import "../../styles/task.scss"

function TaskComponent({ task }) {

    useEffect(() =>{
        console.log("Created task")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
            
        }
    }, [task])

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                    <h6 className="mb-0">
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>
                )
                case LEVELS.URGENTE:
                    return(
                        <h6 className="mb-0">
                            <span className='badge bg-warning'>
                                {task.level}
                            </span>
                        </h6>
                    )
                    case LEVELS.BLOCKING:
                        return(
                            <h6 className="mb-0">
                                <span className='badge bg-danger'>
                                    {task.level}
                                </span>
                            </h6>
                        )
        
            default:
                break;
        }
    }

    
  return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                
            { task.completed ? 
            <i className='bi-toggle-on' style={{color:"green"}}></i> : 
            <i className='bi-toggle-off'style={{color:"grey"}}></i>
            }
            <i className='bi-trash' style={{color:"tomato"}}></i>
            </td>
        </tr>



    
    // <div>
    //     <h2 className='task-name'>
    //         Nombre: { task.name }
    //     </h2>
    //     <h3>
    //         Descripción: { task.description }
    //     </h3>
    //     <h4>
    //         Level: { task.level }
    //     </h4>
    //     <h5>
    //         This task is : { task.completed ? 'COMPLETED':'PENDING' }
    //     </h5>
    // </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;

