import React, { useState } from 'react';
import { User } from '../interface/User.interface';
import { Box, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import UserModal from './UserModal.tsx';
import styles from './UserCard.module.css';
import Image from './Image';
interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  
  const [openModal, setOpenModal] = useState(false);
 
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description?.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <Card className={styles.userCard} sx={{ borderRadius: '5%' }}>
      <Box className={styles.userCardMedia}>
        <Image src={user.avatar} alt={`${user.firstname} ${user.lastname}`} />
      </Box>
      <Box className={styles.userCardContentContainer}>
        <CardContent className={styles.userCardContent}>
          <Typography gutterBottom variant="h5" component="div" className={styles.userCardTitle}>
            {user.firstname} {user.lastname}
          </Typography>
          <Typography variant="body2" className={styles.userCardDescription}>
            {truncateDescription(user.description, 150)}
          </Typography>
        </CardContent>
        <CardActions className={styles.userCardActions}>
          <Button variant="contained" className={styles.userCardButton} sx={{textTransform: "capitalize"}} onClick={handleOpenModal}>View More</Button>
        </CardActions>
      </Box>
      <UserModal 
        open={openModal} 
        handleClose={handleCloseModal} 
        user={user}
      />
    </Card>
  );
};

export default UserCard;
