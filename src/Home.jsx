import CatList from './CatList'
import CatForm from './CatForm'
import Grid from '@mui/material/Unstable_Grid2';

export default function Home({addNewCat, cats, selectCat}) {
    return (
    <>
        <Grid xs={12}>
          <CatForm addNewCat={name => addNewCat(name)}/>
        </Grid>
        <Grid xs={12}>
          <CatList cats={cats} selectCat={selectCat} />
        </Grid>
    </>)
}