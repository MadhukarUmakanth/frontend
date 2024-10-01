import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
