import React, { Fragment } from 'react'
import useFetch from '../hooks/useFetch'
import Lista from './Lista'

const fe = () => {
    const {initialState, isLoading, errors} = useFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <Fragment>
            {isLoading ? <h4>Cargando..</h4> : <Lista initialState={initialState}/>}
        </Fragment>
    )
}

export default fe
