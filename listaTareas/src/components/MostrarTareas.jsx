import React, { Fragment } from 'react'

const MostrarTareas = ({tareasState, eliminarTarea, finalizarTarea}) => {

  return (
    <Fragment>
        <ul className="list-group lista">
            {
                tareasState.map(item =>{
                    return(
                        <li className="list-group-item" key={item.id} >
                            <div className="tarea">
                                <div className="titulo">
                                    <input onChange={() => finalizarTarea(item.id)} className="form-check-input" type="checkbox"  value={item.completed} checked={item.completed==true ? "disable" : false} id="flexCheckDefault"></input>
                                    <span>{item.title}</span>
                                </div>
                                <button onClick={() => eliminarTarea(item.id)} className='btn btn-outline-secondary'>Borrar</button>
                            </div>
                        </li>
                    )
                
                })  
            } 
             
        </ul>
    </Fragment>
  )
}

export default MostrarTareas
