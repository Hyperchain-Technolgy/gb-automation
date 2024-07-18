import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  )
}

export default App
