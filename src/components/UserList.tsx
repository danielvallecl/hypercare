import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { User } from '../interface/User.interface';
import UserCard from './UserCard';
import { Alert, CircularProgress, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const UserList: React.FC = () => {
  const { data, error, isLoading } = useUsers();
  const theme = useTheme();

  if (isLoading) return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <CircularProgress role="progressbar" />
    </Grid>
  );

  if (error) return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Alert severity="error">{error.message}</Alert>
    </Grid>
  );

  return (
    <Grid container spacing={2} alignItems="center"sx={{ width: '70%', margin: '0 auto', [theme.breakpoints.down('md')]: { width: '100%' }}}>
      {data?.map((user: User) => (
        <Grid item key={user.id} xs={12} sm={6} md={4}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;