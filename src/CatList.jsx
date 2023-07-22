import { useState, useEffect, useContext } from 'react'
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import PetsIcon from '@mui/icons-material/Pets';


const CatList = ({cats}) => {
  return (
    <List>
      {
        cats.map((c) => (
            <ListItem>
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText>{c.name}</ListItemText>
            </ListItem>
          )
                 )
      }
    </List>
  )
}

export default CatList;