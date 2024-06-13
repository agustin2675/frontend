import React from 'react'

const agregarTareas = (formState) => {

    if(formState.title == '') return

    const tarea = {
        userId: 1,
        id: new Date().getTime(),
        title: formState.title,
        completed: false
    }

    const action = {
        type: 'Agregar Tarea',
        payload: tarea
    }
    
    return action
}

export default agregarTareas
