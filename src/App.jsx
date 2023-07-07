import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './pages/Start'
import About from './pages/About'
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import Videos from './pages/Videos'
import Community from './pages/Community'
import Events from './pages/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
              <Route path="/" element={<Start></Start>}></Route>
              <Route path="/About" element={<About></About>}></Route>
              <Route path="/Videos" element={<Videos></Videos>}></Route>
              <Route path="/Community" element={<Community></Community>}></Route>
              <Route path="/Events" element={<Events></Events>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
