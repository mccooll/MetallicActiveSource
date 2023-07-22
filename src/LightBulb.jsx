import { useState, useEffect } from 'react'
import './LightBulb.css'
import {randomColour} from './randomColour'

const LightBulb = ({on}) => {
  const [colour, setColour] = useState(randomColour());

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