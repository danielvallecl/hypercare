import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import UserCard from '../components/UserCard';

const theme = createTheme();

const user = {
  "id": "980b82bf-d1af-4e66-ab93-004da059b275",
  "username": "frodo.baggins",
  "firstname": "Frodo",
  "lastname": "Baggins",
  "email": "frodo.baggins@shiremail.com",
  "avatar": "https://robohash.org/illumvitaeea.png?size=50x50&set=set1",
  "role": "Ring Bearer",
  "join_date": "9/22/2001",
  "description": "Frodo Baggins, son of Drogo Baggins, was a hobbit of the Shire during the Third Age. He was a Ring-bearer, best known for his quest to destroy the One Ring in the fires of Mount Doom."
}

describe('UserCard', () => {
  it('renders user data correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserCard user={user} />
      </ThemeProvider>
    );

    expect(screen.getByText('Frodo Baggins')).toBeInTheDocument();
  });

  it('opens UserModal component when "View More" button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <UserCard user={user} />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('View More'));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
