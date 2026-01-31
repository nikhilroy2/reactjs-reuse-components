import { useState } from 'react'
import './App.css'
import SectionFacilities from './components/SectionFacilities'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <SectionFacilities />
    </>
  )
}

export default App
