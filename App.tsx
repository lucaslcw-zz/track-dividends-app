/* eslint-disable camelcase */
import React from 'react';
import {
  useFonts,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
} from '@expo-google-fonts/ibm-plex-sans';

import { AssetProvider } from '~/context/AssetContext';
import { SettingProvider } from '~/context/SettingContext';
import { NotificationProvider } from '~/context/NotificationContext';
import Routes from '~/routes/app.routes';

const App: React.FC = () => {
  const [fontLoaded] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
  });

  if (!fontLoaded) return null;

  return (
    <NotificationProvider>
      <SettingProvider>
        <AssetProvider>
          <Routes />
        </AssetProvider>
      </SettingProvider>
    </NotificationProvider>
  );
};

export default App;
