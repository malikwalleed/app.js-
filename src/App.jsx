import { useState } from 'react'
import './App.css'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'
import FloatingHearts from './components/FloatingHearts'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      {isLoggedIn ? (
        <>
          <HomeScreen />
          <FloatingHearts text="I Love You Mari Zindagi ❤️" />
        </>
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  )
}
export default App