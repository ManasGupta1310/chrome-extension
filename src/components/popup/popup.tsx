import {
  DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Dialog, Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import PopupContent from './popupContent';

const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
// eslint-disable-next-line react/jsx-props-no-spreading
) => <Slide direction="up" ref={ref} {...props} />);

function Popup({ open, setOpen }:any) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Select the files to be downloaded:</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <PopupContent />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Popup;
