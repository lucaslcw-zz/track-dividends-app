import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  useFonts,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold
} from '@expo-google-fonts/ibm-plex-sans';

import { ContextProvider } from './src/context/Context';
import Routes from './src/routes/app.routes';

const App = () => {
  const [fontsLoaded] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <ContextProvider>
      <StatusBar style="auto" />
      <Routes />
    </ContextProvider>
  );
}

export default App;