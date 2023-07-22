import { useState, useEffect, useContext } from 'react'
import AppContext from './AppContext'
import './LightBulb.css'
import {randomColour} from './randomColour'

const LightBulb = () => {
  const [colour, setColour] = useState(randomColour());
  const on = useContext(AppContext)

  useEffect(() => {
    if(on===true) {
      setColour(randomColour())
    }
    return () => console.log('removed')
  },[on])
  
  return (
    <div className={`bulb ${on ? 'on':'off'}`} style={{backgroundColor: colour}}></div>
  )
}

export default LightBulb;