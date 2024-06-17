import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserList from './components/UserList';
import Image from './components/Image';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

import hypercareLogo from './assets/hypercare.png';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <div style={{ textAlign: 'center' }}>
          <Image src={hypercareLogo} alt="Hypercare"/>
          <UserList />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
