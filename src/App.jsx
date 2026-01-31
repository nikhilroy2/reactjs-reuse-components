import { useState } from 'react'
import './App.css'
import SectionFacilities from './components/SectionFacilities'
import SectionAskDoctors from './components/SectionAskDoctors'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <SectionFacilities />
      <SectionAskDoctors />
    </>
  )
}

export default App
