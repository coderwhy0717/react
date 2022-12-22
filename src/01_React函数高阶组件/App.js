import { useState } from 'react'
import Home from './home'

function App() {
  const [item, setItem] = useState(false)
  const loginClick = (e) => {
    console.log(e)
    setTimeout(() => {
      setItem(true)
      localStorage.setItem('token', 'coderwhy')
    }, 2000)
  }
  return (
    <div className="App">
      <Home />
      {item ? '' : <button onClick={(e) => loginClick(e)}>点击登录</button>}
    </div>
  )
}

export default App
