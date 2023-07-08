import { useState } from 'react'
import './App.css'
import LightBulb from './LightBulb'
import Colors from './Colors'
import Switch from './Switch'

const App = ({name}) => {
  const [bulbs, setBulbs] = useState(Array(20).fill(true));
  console.log(bulbs)

  const toggleBulb = (i) => {
    const newBulbs = [...bulbs];
    newBulbs[i] = !bulbs[i];
    setBulbs(newBulbs)
  }
  
  return (
    <div>
      {bulbs.map((onStatus,i) => (
        <div>
         <LightBulb on={onStatus}></LightBulb>
         <Switch toggle={() => toggleBulb(i) }></Switch>
        </div>)
      )}
    </div>
  )
}

export default App;


// {[1,2,3].map(function (n) {
//   return ([
//     <h3></h3>, // note the comma
//     <p></p>
//   ]);
// })}