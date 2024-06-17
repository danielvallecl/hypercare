import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { User } from '../interface/User.interface';
import styles from './UserModal.module.css';

interface UserModalProps {
  open: boolean;
  handleClose: () => void;
  user: User;
}

const UserModal: React.FC<UserModalProps> = ({ open, handleClose, user }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={`${user.firstname} ${user.lastname}`}
      aria-describedby={`${user.description}`}
      role="dialog"
    >
      <Box className={styles.userCardModal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {`${user.firstname} ${user.lastname}`}
        </Typography>
        <Box className={styles.modalContent}>
          <Typography><strong>ID:</strong> {user.id}</Typography>
          <Typography><strong>Username:</strong> {user.username}</Typography>
          <Typography><strong>First Name:</strong> {user.firstname}</Typography>
          <Typography><strong>Last Name:</strong> {user.lastname}</Typography>
          <Typography><strong>Email:</strong> {user.email}</Typography>
          <Typography><strong>Role:</strong> {user.role}</Typography>
          <Typography><strong>Join Date:</strong> {user.join_date}</Typography>
          <Typography><strong>Description:</strong> {user.description}</Typography>
        </Box>
        <Button variant="contained" sx={{textTransform: "capitalize"}} onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default UserModal;
