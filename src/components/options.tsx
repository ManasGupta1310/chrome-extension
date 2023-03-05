/* eslint-disable react/require-default-props */
import {
  List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react';
import Popup from './popup/popup';

// interface Props {
//   setCurrentScreen?: (screen: string) => void;
// }

function Option() {
  const downloadOptions = [
    'Download all',
    'Download videos',
    'Download PPT / PDF',
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {downloadOptions.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={(
                <IconButton edge="end" aria-label="comments">
                  <DownloadIcon sx={{ color: 'white' }} />
                </IconButton>
            )}
              disablePadding
            >
              <ListItemButton role={undefined} dense onClick={handleClickOpen}>
                <ListItemText id={labelId} primary={value} />
                <Popup open={open} setOpen={setOpen} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default Option;
