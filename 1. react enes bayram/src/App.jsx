import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    setCount (count - 1)
  }

  console.log("component render edildi")

  return (
    <div>
      <div> {count} </div>
      <div><button onClick={arttir}>Arttır</button></div>
      <div><button onClick={azalt}>Azalt</button></div>
    </div>
  )
}

export default App
