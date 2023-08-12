import { useState, useEffect, useContext } from 'react'
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import PetsIcon from '@mui/icons-material/Pets';
import Modal from '@mui/material/Modal';


const CatList = ({cats}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState({});

  const handleOpen = (cat) => {
    setIsModalOpen(true);
    setSelectedCat(cat);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={()=>handleClose()}>
        <div className="catModal">
          <h1>{selectedCat.name}</h1>
          <div><img src={selectedCat.image} /></div>
          <p>{selectedCat.desc}</p>
        </div>
      </Modal>
      <List>
        {
          cats.map((c) => (
              <ListItem key={c.name} onClick={()=>handleOpen(c)}>
                <ListItemIcon>
                  <PetsIcon />
                </ListItemIcon>
                <ListItemText>{c.name}</ListItemText>
              </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default CatList;