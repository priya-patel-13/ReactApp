import React , {useState} from 'react'
import { Provider } from 'react-redux'
import ReduxApi from './Redux/ReduxApi'
import { store } from './Feature/Store'

export default function Store() {
  return (
    <div>
        <Provider store={store}>
            <ReduxApi/>
        </Provider>
    </div>
  )
}
