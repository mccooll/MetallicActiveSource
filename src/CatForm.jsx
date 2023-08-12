import { useRef } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';

const CatForm = ({addNewCat}) => {

  const ref = useRef()
  
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <TextField inputRef={ref} id="outlined-basic" label="Name" variant="outlined" />
      </Grid>
      <Grid xs={12}>
        <Button  onClick={() => addNewCat(ref.current.value)} variant="contained">Add Cat</Button>
      </Grid>
    </Grid>
  )
}

export default CatForm;