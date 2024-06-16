import React, { useState } from 'react';
import { User } from '../interface/User.interface';
import { Card, CardContent, CardMedia, Typography, Button, Modal, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styles from './UserCard.module.css';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const theme = useTheme();

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <Card className={styles.userCard}>
      <div className={styles.userCardMedia}>
        <img src={user.avatar} alt={`${user.firstname} ${user.lastname}`} />
      </div>
      <CardContent className={styles.userCardContent}>
        <Typography gutterBottom variant="h5" component="div" className={styles.userCardTitle}>
          {user.firstname} {user.lastname}
        </Typography>
        <Typography variant="body2" className={styles.userCardDescription}>
          {truncateDescription(user.description, 150)}
        </Typography>
      </CardContent>
      <Button className={styles.userCardButton} onClick={handleOpenModal}>View More</Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.userCardModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {user.firstname} {user.lastname}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {user.description}
          </Typography>
          <Button onClick={handleCloseModal}>Close</Button>
        </Box>
      </Modal>
    </Card>
  );
};

export default UserCard;
