import React, { useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold
} from '@expo-google-fonts/ibm-plex-sans';

import { resetStackNavigation } from '~/tools/ResetNavigation';
import { AssetContext } from '~/context/AssetContext';

import { Container, Title } from '~/screens/Splash/styles';

const Splash = () => {
  const { handleGetAssets } = useContext(AssetContext);

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
  });

  const handleLoadApp = () => {
    handleGetAssets();

    setTimeout(() => {
      resetStackNavigation(navigation, 'TabNavigatorRoutes');
    }, 3000);
  }

  useEffect(() => {
    handleLoadApp();
  }, []);

  if (!fontsLoaded) return <Container />;

  return (
    <Container>
      <StatusBar style='light' />
      <Title>TrackingDividends</Title>
    </Container>
  );
}

export default Splash;