import React from "react"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"

const App = () => {
  return (
    <>
      <div className="flex animate-fadeIn duration-1000">
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default App
