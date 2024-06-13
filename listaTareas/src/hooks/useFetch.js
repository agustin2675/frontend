import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [state, setState] = useState({
        initialState: [],
        isLoading:true,
        errors: null
    })

    const getFetch = async() => {

        /*if(!url) return*/

        try{
            const response = await fetch(url)
            const data = await response.json()

            setState({
                initialState:data,
                isLoading:false,
                errors:null
            })

        }catch(e){
            setState({
                initialState:[],
                isLoading:true,
                errors:e
            })
        } 
    }

    useEffect(() =>{
        getFetch()
    }, [url])

    return {
        initialState: state.initialState,
        isLoading: state.isLoading,
        errors: state.errors
    }
}

export default useFetch
