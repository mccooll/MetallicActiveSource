import { useState } from 'react'
import './App.css'
import LightBulb from './LightBulb'
import Colors from './Colors'
import Switch from './Switch'

const App = ({name}) => {
  const [on, setOn] = useState(true);
  
  return (
    <div>
      <div class="lightFixture">
        <LightBulb on={on}></LightBulb>
        <LightBulb on={on}></LightBulb>
        <LightBulb on={on}></LightBulb>
        <LightBulb on={on}></LightBulb>
        <LightBulb on={on}></LightBulb>
      </div>
      <Switch toggle={() => setOn(!on) }></Switch>
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