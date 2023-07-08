import { useState } from 'react'
import './App.css'
import LightBulb from './LightBulb'
import Colors from './Colors'
import Switch from './Switch'

const App = ({name}) => {
  const [isOn, setIsOn] = useState(true);
  return (
    <div>
      <LightBulb on={isOn}></LightBulb>
      <Switch toggle={() => setIsOn(!isOn)}></Switch>
    </div>
  )
}

export default App;