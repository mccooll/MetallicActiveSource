import { useState, useEffect, useContext } from 'react'
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom'


const CatList = ({cats, selectCat}) => {

  return (
    <>
      <List>
        {
          cats.map((c) => (
              <ListItem key={c.name}>
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <Link to="cat" onClick={()=>selectCat(c)}>
                  <ListItemText>{c.name}</ListItemText>
                </Link>
              </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default CatList;