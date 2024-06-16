import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UsersList from './components/UsersList';
import Image from './components/Image';
import hypercareLogo from './assets/hypercare.png';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div style={{ textAlign: 'center' }}>
          <Image src={hypercareLogo} alt="Hypercare"/>
          <UsersList />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
