import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { User } from '../interface/User.interface';
import UserCard from './UserCard';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

const UsersList: React.FC = () => {
  const { data, error, isLoading } = useUsers();
  const theme = useTheme();

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Grid container spacing={2} align="center" sx={{ width: '70%', margin: '0 auto', [theme.breakpoints.down('sm')]: { width: '100%' } }}>
      {data?.map((user: User) => (
        <Grid item key={user.id} xs={12} sm={6} md={4}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UsersList;
