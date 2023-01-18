import { useState } from "react";
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar"; 
import User from "./components/user/User"
import Rightbar from "./components/rightbar/Rightbar";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <User />
        <Rightbar />
      </div>
    </>
  )
}

export default App
