import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CakeView from './components/CakeView'
import IceCreamView from './components/IceCreamView'
import UserView from './components/UserView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  )
}

export default App
