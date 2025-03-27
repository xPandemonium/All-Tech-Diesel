import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'

import Header from './components/Header'

function App() {


  return (
    <div className='bg-primary-main flex flex-col min-h-svh'>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default App
