import { useRef } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CatForm = ({addNewCat}) => {

  const ref = useRef()
  
  return (
    <>
      <TextField inputRef={ref} id="outlined-basic" label="Name" variant="outlined" />
      <div>
        <Button  onClick={() => addNewCat(ref.current.value)} variant="contained">Add Cat</Button>
      </div>
    </>
  )
}

export default CatForm;