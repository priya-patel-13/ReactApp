import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import MoneyMan from './Redux/MoneyMan'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <MoneyMan/>
      </Provider>
    </div>
  )
}
