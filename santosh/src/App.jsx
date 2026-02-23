import { useState } from 'react'

import './App.css'
import Muskan from './Muskan'
// const [accepted, setAccepted] = useState(false);

function App() {
  const [count, setCount] = useState(0)
const [accepted, setAccepted] = useState(false);
  return (
  <>
    

    {accepted ? (
        <Congratulations />
      ) : (
        <Muskan onYes={() => setAccepted(true)} />
      )}
    </>
  )
}

export default App
