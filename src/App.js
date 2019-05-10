import React from 'react'

import GlobalHedaer from './components/GlobalHeader'
import Carousal from './components/Carousal'
import Config from './config/config'

function App() {
  return (
    <div className="App">
      <GlobalHedaer />
      <div className="main-container">
        {/* Carousal */}
        <Carousal />
      </div>
    </div>
  )
}

export default App
