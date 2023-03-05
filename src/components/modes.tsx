import {
  List, ListItem, IconButton, ListItemButton, ListItemText,
} from '@mui/material';
import React from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

interface Props {
  setCurrentScreen: (screen: string) => void;
}
function Modes({ setCurrentScreen }:Props) {
  const modes = [
    {
      name: 'Lectures / Resources',
      icon: <DoubleArrowIcon sx={{ color: 'white' }} />,
      onClick: () => setCurrentScreen('Lectures / Resources'),
    },
  ];
  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {modes.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value.name}
              secondaryAction={(
                <IconButton edge="end" aria-label="comments">
                  <DoubleArrowIcon sx={{ color: 'white' }} />
                </IconButton>
            )}
              disablePadding
              sx={{ borderRadius: '5px', backgroundColor: '#3f51b5' }}
            >
              <ListItemButton dense onClick={value.onClick}>
                <ListItemText id={labelId} primary={value.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default Modes;
