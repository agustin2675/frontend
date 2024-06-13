import React, { Fragment, useEffect, useState } from 'react'
import MostrarTareas from './MostrarTareas'


const ListaTareas = ({tareasState, eliminarTarea, finalizarTarea}) => {

    const [tareas, setTareas] = useState(tareasState)

    const mostrarTodas = () =>{
        setTareas(tareasState)
    }

    const mostrarIncompletas = () => {
        setTareas(tareasState.filter(tarea => tarea.completed == false))
    }

    const mostrarCompletas = () => {
        setTareas(tareasState.filter(tarea => tarea.completed == true))
        console.log(tareasState)
    }

    useEffect(() =>{
        mostrarTodas()
    }, [tareasState])

    return (
        <Fragment>
            <hr />
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar
                </button>
                <ul className="dropdown-menu">
                    <li><button onClick={mostrarTodas} className="dropdown-item">Todas</button></li>
                    <li><button onClick={mostrarCompletas} className="dropdown-item">Completadas</button></li>
                    <li><button onClick={mostrarIncompletas} className="dropdown-item">Incompletas</button></li>
                </ul>
            </div>
            <MostrarTareas 
                tareasState={tareas} 
                eliminarTarea={eliminarTarea} 
                finalizarTarea={finalizarTarea} 
            ></MostrarTareas> 
        </Fragment>
    )
}

export default ListaTareas
