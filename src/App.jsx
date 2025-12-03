import './App.css'
import Login from './component/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound'
// import Register from './component/RegisterAndEdit'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
