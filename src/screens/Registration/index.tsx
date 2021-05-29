import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { resetStackNavigation } from '~/tools/ResetNavigation';
import { AssetContext } from '~/context/AssetContext';

import {
  Container,
  Actions,
  CloseButton,
  InputContainer,
  Label,
  Input,
  Header,
  Title,
  ButtonContainer,
  Button,
  ButtonText
} from '~/screens/Registration/styles';

const Registration: React.FC = ({ route }: any) => {
  const { ticker } = route.params;

  const { handleSaveAsset } = useContext(AssetContext);

  const [amount, setAmount] = useState<string>('');
  const [averagePrice, setAveragePrice] = useState<string>('');

  const navigation = useNavigation();

  const handleOnSubmitSaveAsset = () => {
    handleSaveAsset({ ticker, quotas: Number(amount), averagePrice: Number(averagePrice) });
    resetStackNavigation(navigation, 'TabNavigatorRoutes');
  }

  return (
    <Container>
      <StatusBar style='dark' />
      <Actions>
        <CloseButton onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={32} color="black" />
        </CloseButton>
      </Actions>
      <Header>
        <Title>{ticker}</Title>
      </Header>
      <Label>Quantidade</Label>
      <InputContainer>
        <Input
          placeholder='Digite a quantidade de cotas...'
          selectionColor='#000'
          maxLength={10}
          keyboardType='number-pad'
          placeholderTextColor='#BDBDBD'
          onChangeText={(text: string) => setAmount(text)}
          value={amount}
        />
      </InputContainer>
      <Label>Preço Médio</Label>
      <InputContainer>
        <Input
          placeholder='Digite o preço médio das cotas...'
          selectionColor='#000'
          maxLength={10}
          keyboardType='number-pad'
          placeholderTextColor='#BDBDBD'
          onChangeText={(text: string) => setAveragePrice(text)}
          value={averagePrice}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onPress={handleOnSubmitSaveAsset}>
          <ButtonText>Salvar</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Registration;