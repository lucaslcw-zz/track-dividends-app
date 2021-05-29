import React from 'react';

import { AssetProvider } from '~/context/AssetContext';
import { SettingProvider } from '~/context/SettingContext';
import Routes from '~/routes/app.routes';

const App: React.FC = () => (
  <SettingProvider>
    <AssetProvider>
      <Routes />
    </AssetProvider>
  </SettingProvider>
);

export default App;