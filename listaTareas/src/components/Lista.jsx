import React, { Fragment, useReducer, useState} from 'react'
import useForm from '../hooks/useForm'
import tareaReducer from '../hooks/tareaReducer'
import ListaTareas from './ListaTareas'
import agregarTareas from '../hooks/agregarTarea'




const Lista = ({initialState}) => {

    const [tareasState, dispatch] = useReducer(tareaReducer ,initialState)
    const {title, formState, onInputChange} = useForm({title: ""})

    const onSubmit = (e) =>{
        e.preventDefault()

        if(formState.title == '') return

        const action = agregarTareas(formState)
        dispatch(action)
        
    }

    const borrarTareas = () =>{
        const action = {
            type: 'Borrar Tarea',
        }
        dispatch(action)
    }

    const eliminarTarea = (id) =>{
        const action = {
            type: 'Eliminar Tarea',
            payload: id
        }

       dispatch(action)
    }

    const finalizarTarea = (id) =>{
        
        const action = {
            type: 'Finalizar Tarea',
            payload: id
        }

        dispatch(action)
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                    <div className="input-group mb-3">
                        <input 
                            type="text"    
                            className="form-control" 
                            placeholder="Agregar tarea"
                            name='title'
                            value={title}
                            onChange={(e) => onInputChange(e)}
                    />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Agregar</button>
                </div>
            </form>
            <button onClick={borrarTareas} type="button" className="btn btn-outline-secondary">Borrar todo</button>

            <ListaTareas 
                tareasState={tareasState} 
                eliminarTarea={eliminarTarea} 
                finalizarTarea={finalizarTarea}
            />   
        </Fragment>
  )
}

export default Lista
