import React from "react";
import PropType from 'prop-types'

import { FaWindowClose, FaEdit } from 'react-icons/fa'

import './tasks.css'

export default function Tasks ({tasks, handleDelet, handleEdit}){
    return(
        <div className='tasks'>
        <ul>
            {tasks.map((task, index) => (
                <li key={task}>
                    {task}
                    <div className='cont-edit-delet'>
                        <FaEdit 
                            onClick={(e) => handleEdit(e, index)} 
                            className='edit'
                        />
                        <FaWindowClose 
                            onClick={(e) => handleDelet(e, index)} 
                            className='delet'
                        />
                    </div>
                </li>
                ))}
        </ul>
    </div>
    )
}

Tasks.propType = {
    handleDelet: PropType.array.isRequired,
    handleEdit: PropType.func.isRequired,
    tasks: PropType.array.isRequired,
}