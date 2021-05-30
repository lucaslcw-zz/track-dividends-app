import React, { useState, useContext } from 'react';
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
} from '~/screens/Registration/styles';

const Registration: React.FC = ({ route }: any) => {
  const { ticker } = route.params;

  const { handleSaveAsset } = useContext(AssetContext);
  const { handleDisplayNotification } = useContext(NotificationContext);

  const [amount, setAmount] = useState<string>('');
  const [averagePrice, setAveragePrice] = useState<string>('');

  const navigation = useNavigation();

  const handleOnSubmitSaveAsset = () => {
    if (amount !== '' && averagePrice !== '') {
      const cutAveragePriceString = averagePrice.slice(2, averagePrice.length);
      const averagePriceToNumber = Number(cutAveragePriceString.replace(',', '.'));

      handleSaveAsset({
        ticker,
        quotas: Number(amount),
        averagePrice: averagePriceToNumber,
      });

      resetStackNavigation(navigation, 'TabNavigatorRoutes');
    } else {
      handleDisplayNotification({
        message: 'Preencha os campos corretamente.',
        status: 'error',
      });
    }
  };

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
          maxLength={7}
          keyboardType="number-pad"
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
          maxLength={10}
          keyboardType="number-pad"
          placeholderTextColor="#BDBDBD"
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
};

export default Registration;
