import React, { useEffect, useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { resetStackNavigation } from '~/tools/ResetNavigation';
import { AssetContext } from '~/context/AssetContext';
import { NotificationContext } from '~/context/NotificationContext';

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
  ButtonText,
} from '~/screens/Edit/styles';

const Edit: React.FC = ({ route }: any) => {
  const { index } = route.params;

  const { asset, handleGetAsset, handleEditAsset } = useContext(AssetContext);
  const { handleDisplayNotification } = useContext(NotificationContext);

  const [ticker, setTicker] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [averagePrice, setAveragePrice] = useState<string>('');

  const navigation = useNavigation();

  const handleOnSubmitEditAsset = () => {
    if (ticker !== '' && amount !== '' && averagePrice !== '') {
      const cutAveragePriceString = averagePrice.slice(2, averagePrice.length);
      const averagePriceToNumber = Number(cutAveragePriceString.replace(',', '.'));

      handleEditAsset({
        ticker,
        quotas: Number(amount),
        averagePrice: averagePriceToNumber,
      }, index);

      resetStackNavigation(navigation, 'TabNavigatorRoutes');
    } else {
      handleDisplayNotification({
        message: 'Preencha os campos corretamente.',
        status: 'error',
      });
    }
  };

  useEffect(() => {
    if (asset !== null) {
      const { ticker, quotas, averagePrice }: any = asset;

      const averagePriceToFloat = Number(averagePrice).toFixed(2);

      setTicker(ticker);
      setAmount(quotas.toString());
      setAveragePrice(averagePriceToFloat.toString());
    }
  }, [asset]);

  useEffect(() => {
    handleGetAsset(index);
  }, []);

  return (
    <Container>
      <StatusBar style="dark" />
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
          type="money"
          options={{
            precision: 0,
            delimiter: '.',
            unit: '',
            suffixUnit: '',
          }}
          placeholder="Digite a quantidade de cotas..."
          selectionColor="#000"
          keyboardType="number-pad"
          maxLength={7}
          placeholderTextColor="#BDBDBD"
          onChangeText={(text: string) => setAmount(text)}
          value={amount}
        />
      </InputContainer>
      <Label>Preço Médio</Label>
      <InputContainer>
        <Input
          type="money"
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: '',
          }}
          placeholder="Digite o preço médio das cotas..."
          selectionColor="#000"
          keyboardType="number-pad"
          maxLength={10}
          placeholderTextColor="#BDBDBD"
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
};

export default Edit;
