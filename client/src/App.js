import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Form from './components/Form'
import Confirm from './components/Confirm'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
