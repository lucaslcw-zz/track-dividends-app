import React, { useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import Firebase from '~/services/Firebase';
import { resetStackNavigation } from '~/tools/ResetNavigation';
import { AssetContext } from '~/context/AssetContext';

import { Container, Title } from '~/screens/Splash/styles';

const Splash = () => {
  const { handleGetAssets } = useContext(AssetContext);

  const navigation = useNavigation();

  const handleLoadApp = () => {
    Firebase.signIn();
    handleGetAssets();

    setTimeout(() => {
      resetStackNavigation(navigation, 'TabNavigatorRoutes');
    }, 3000);
  };

  useEffect(() => {
    handleLoadApp();
  }, []);

  return (
    <Container>
      <StatusBar style="light" />
      <Title>TrackingDividends</Title>
    </Container>
  );
};

export default Splash;
