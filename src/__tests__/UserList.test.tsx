import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useUsers } from '../hooks/useUsers';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import UserList from '../components/UserList';

vi.mock('../hooks/useUsers');

const theme = createTheme();

describe('UserList', () => {
  it('displays CircularProgress when loading', () => {
    (useUsers as vi.Mock).mockReturnValue({ data: null, error: null, isLoading: true });

    render(
      <ThemeProvider theme={theme}>
        <UserList />
      </ThemeProvider>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('displays error message is there is an error fetching data from Users endpoint', () => {
    const error = { message: 'Error fetching users' };
    (useUsers as vi.Mock).mockReturnValue({ data: null, error, isLoading: false });

    render(
      <ThemeProvider theme={theme}>
        <UserList />
      </ThemeProvider>
    );

    expect(screen.getByText(error.message)).toBeInTheDocument();
  });

  it('displays user cards when data is available', () => {
    const data = [
      { id: 1, firstname: 'Harry', lastname: 'Potter', description: 'Wizard', avatar: 'avatar1.png' },
      { id: 2, firstname: 'Lara', lastname: 'Croft', description: 'Tomb Raider', avatar: 'avatar2.png' },
    ];
    (useUsers as vi.Mock).mockReturnValue({ data, error: null, isLoading: false });

    render(
      <ThemeProvider theme={theme}>
        <UserList />
      </ThemeProvider>
    );

    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
    expect(screen.getByText('Lara Croft')).toBeInTheDocument();
  });
});
