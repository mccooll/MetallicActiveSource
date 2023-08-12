import { useState, useEffect } from 'react'
import './App.css'
import LightBulb from './LightBulb'
import Colors from './Colors'
import Switch from './Switch'
import AppContext from './AppContext'
import CatList from './CatList'
import CatForm from './CatForm'
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

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
        <Grid xs={12}>
          <CatForm addNewCat={name => addNewCat(name)}/>
        </Grid>
        <Grid xs={12}>
          <CatList cats={cats} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App;
