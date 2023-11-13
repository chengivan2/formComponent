import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import FormDemo from './components/formcomp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormDemo />
  
    </>
  )
}

export default App
