import React, { Fragment, useState } from 'react'


const tareaReducer = (state = initialState, action = {}) => {
        var tareas = []

        switch(action.type){
            case 'Agregar Tarea':
                
                tareas = [...state, action.payload]
                return tareas
            
            case 'Finalizar Tarea':
                return state.map(tarea => {
                    if(tarea.id === action.payload){
                        return{
                            ...tarea,
                            completed: !tarea.completed
                        }
                    }
                    return tarea
                })
    
            case 'Eliminar Tarea':
                return state.filter(tarea => tarea.id !== action.payload)

            case 'Borrar Tarea':
                return []
    
        }

    return state
}

export default tareaReducer
