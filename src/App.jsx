import { useState, useEffect } from 'react'
import './App.css'
import LightBulb from './LightBulb'
import Colors from './Colors'
import Switch from './Switch'
import AppContext from './AppContext'
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cat from './Cat'

const theme = createTheme({
  palette: {
    primary: {
      main:'#AD5300'
    }
  },
});

const App = ({name}) => {
  const [on, setOn] = useState(true);
  const [cats, setCats] = useState([{name:"David", breed:"Human"}]);
  const [selectedCat, setSelectedCat] = useState({});

  console.log('render')

  useEffect(() => {
    (async () => {
      const result = await fetch("https://64bc22537b33a35a4447124f.mockapi.io/cats")
      const catsResult = await result.json()
      setCats(catsResult)
    })()
  },[])

  const addNewCat = (name) => {
    const breed = "Human";
    const newCats = [...cats];
    newCats.push({name: name, breed}) // long form vs short form of prop assignment from variable
    setCats(newCats)
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid xs={12} className="lightFixture">
          <AppContext.Provider value={on}>
            <LightBulb></LightBulb>
            <LightBulb></LightBulb>
            <LightBulb></LightBulb>
            <LightBulb></LightBulb>
            <LightBulb></LightBulb>
          </AppContext.Provider>
        </Grid>
        <Grid xs={12}>
          <Switch toggle={() => setOn(!on) } />
        </Grid>
        <Routes>
          <Route path="/" element={<Home cats={cats} addNewCat={addNewCat} selectCat={setSelectedCat} />} />
          <Route path="/cat" element={<Cat cat={selectedCat} />} />
        </Routes>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
