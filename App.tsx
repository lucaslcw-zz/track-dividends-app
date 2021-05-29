import React from 'react';

import { ContextProvider } from '~/context/Context';
import Routes from '~/routes/app.routes';

const App: React.FC = () => (
  <ContextProvider>
    <Routes />
  </ContextProvider>
);

export default App;