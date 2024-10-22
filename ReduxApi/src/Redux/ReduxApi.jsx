import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../Feature/ApiSlice';

export default function ReduxApi() {
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(fetchApi())
    }, [])

    const record = useSelector((state) =>{
        return state.apiKey
    })

  return (
    <div>
        <h1>ReduxApi</h1>
        {
            record.data && 
            record.data.map((e,i) =>{
                return <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.title}</li>
                    <li>{e.price}</li>
                </ul>
            })
        }
    </div>
  )
}
