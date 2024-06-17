import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { vi, expect, describe, it } from 'vitest';
import App from '../App';
import theme from '../theme/theme';

vi.mock('./components/UserList', () => ({
  __esModule: true,
  default: () => <div data-testid="user-list">UserList</div>,
}));

vi.mock('./components/Image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img data-testid="image" src={src} alt={alt} />
  ),
}));

describe('App', () => {
  const queryClient = new QueryClient();

  it('application renders successfully with Hypercare logo', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    );

    expect(screen.getByRole('img', { name: /Hypercare/i })).toBeTruthy();
  });
});
