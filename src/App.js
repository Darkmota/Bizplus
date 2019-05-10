<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'
import GlobalHedaer from './components/GlobalHeader'

>>>>>>> 8107ac06cd663e517610ba927326248de095af59
import './App.css';
import 'normalize.css'
import HeaderMobile from './components/HeaderMobile'
import HeaderPC from './components/HeaderPC'
import Config from './config/config'

<<<<<<< HEAD
function getBreakPointIndex(screenWidth) {
  let index = 0
  for (; index < Config.breakPoint.length && Config.breakPoint[index] <= screenWidth; ++index);
  return index
}

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    let defaultBreakPointIndex = getBreakPointIndex(document.body.clientWidth)
    window.onresize = this.onResizeHandler
    this.state = {
      breakPointIndex: defaultBreakPointIndex
    }
  }

  onResizeHandler = (event) => {
    this.setState({
      breakPointIndex: getBreakPointIndex(document.body.clientWidth)
    })
  }

  render() {
    return (
      <>
        { this.state.breakPointIndex === 0
          ?
            <HeaderMobile></HeaderMobile>
          :
            <HeaderPC></HeaderPC>
        }
      </>
    )
  }
}

export default App;
=======
function App() {
  return (
    <div className="App">
      <GlobalHedaer />
    </div>
  )
}

export default App
>>>>>>> 8107ac06cd663e517610ba927326248de095af59
