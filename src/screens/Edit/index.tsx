import React, { useEffect, useState, useContext } from 'react';
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
} from '~/screens/Edit/styles';

const Edit: React.FC = ({ route }: any) => {
  const { index } = route.params;

  const { asset, handleGetAsset, handleEditAsset } = useContext(AssetContext);

  const [ticker, setTicker] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [averagePrice, setAveragePrice] = useState<string>('');

  const navigation = useNavigation();

  const handleOnSubmitEditAsset = () => {
    handleEditAsset({ ticker, quotas: Number(amount), averagePrice: Number(averagePrice) }, index);
    resetStackNavigation(navigation, 'TabNavigatorRoutes');
  }

  useEffect(() => {
    if (asset !== null) {
      const { ticker, quotas, averagePrice }: any = asset;

      setTicker(ticker);
      setAmount(quotas.toString());
      setAveragePrice(averagePrice.toString());
    }
  }, [asset]);

  useEffect(() => {
    handleGetAsset(index);
  }, []);

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
          keyboardType='number-pad'
          maxLength={10}
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
          keyboardType='number-pad'
          maxLength={10}
          placeholderTextColor='#BDBDBD'
          onChangeText={(text: string) => setAveragePrice(text)}
          value={averagePrice}
        />
      </InputContainer>
      <ButtonContainer>
        <Button onPress={handleOnSubmitEditAsset}>
          <ButtonText>Salvar Alterações</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Edit;