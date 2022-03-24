import './styles/App.css'
import './components/NavBar'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
