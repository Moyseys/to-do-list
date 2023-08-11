import React from "react";
import PropType from 'prop-types'
import { FaPlus } from 'react-icons/fa'

import './form.css'

export default function form({handleChange, handleSubmit, newTask}){
    return(
        <form action="#" onSubmit={handleSubmit}>
            {/* 
            onChange é captura o evento de 
            "chage" e chama a function "handleChange()"

            Além disso é usado "{" para escrever
            js no jsx
            */}
            <h1>Lista de tarefas</h1>
            <div className='cont-newTask'>
                <input 
                className='newTask' 
                onChange={handleChange} 
                type='text'
                value={newTask}
                />
                <button type='submit'>
                    <FaPlus />{/*FaPlus é um component*/}
                </button>
            </div>
        </form>
    )
}

form.propType = {
    handleChange: PropType.func.isRequired,
    handleSubmit: PropType.func.isRequired,
    newTask: PropType.string
}