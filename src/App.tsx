import { useState } from 'react'
import HomePage from './pages/HomePage/components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HomePage></HomePage>
    </div>
  )
}

export default App
