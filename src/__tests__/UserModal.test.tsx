import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { User } from '../interface/User.interface';
import UserModal from '../components/UserModal';

const theme = createTheme();

const user: User = {
  id: "1",
  username: 'harrypotter',
  firstname: 'Harry',
  lastname: 'Potter',
  email: 'harrypotter@example.com',
  role: 'Wizard',
  join_date: '2023-01-01',
  description: 'A very skilled wizard',
  avatar: ''
};

describe('UserModal', () => {
  it('renders user information and fields correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserModal open={true} handleClose={() => {}} user={user} />
      </ThemeProvider>
    );

    expect(screen.getByText('Harry Potter')).toBeInTheDocument();
    expect(screen.getByText('ID:')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Username:')).toBeInTheDocument();
    expect(screen.getByText('harrypotter')).toBeInTheDocument();
    expect(screen.getByText('First Name:')).toBeInTheDocument();
    expect(screen.getByText('Harry')).toBeInTheDocument();
    expect(screen.getByText('Last Name:')).toBeInTheDocument();
    expect(screen.getByText('Potter')).toBeInTheDocument();
    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('harrypotter@example.com')).toBeInTheDocument();
    expect(screen.getByText('Role:')).toBeInTheDocument();
    expect(screen.getByText('Wizard')).toBeInTheDocument();
    expect(screen.getByText('Join Date:')).toBeInTheDocument();
    expect(screen.getByText('2023-01-01')).toBeInTheDocument();
    expect(screen.getByText('Description:')).toBeInTheDocument();
    expect(screen.getByText('A very skilled wizard')).toBeInTheDocument();
  });

  it('calls handleClose when the Close button on View More modal is clicked', () => {
    const handleClose = vi.fn();

    render(
      <ThemeProvider theme={theme}>
        <UserModal open={true} handleClose={handleClose} user={user} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Close'));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
