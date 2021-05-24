import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Context } from '../../context/Context';

import {
  Container,
  SafeView,
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
} from './styles';

const Registration: React.FC = ({ route }: any) => {
  const { ticker } = route.params;

  const { handleSaveAsset } = useContext(Context);

  const [amount, setAmount] = useState<string>('');
  const [averagePrice, setAveragePrice] = useState<string>('');

  const navigation = useNavigation();

  return (
    <Container>
      <SafeView>
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
            placeholderTextColor='#BDBDBD'
            onChangeText={(text) => setAmount(text)}
            value={amount}
          />
        </InputContainer>
        <Label>Preço Médio</Label>
        <InputContainer>
          <Input
            placeholder='Digite o preço médio das cotas...'
            selectionColor='#000'
            keyboardType='number-pad'
            placeholderTextColor='#BDBDBD'
            onChangeText={(text) => setAveragePrice(text)}
            value={averagePrice}
          />
        </InputContainer>
        <ButtonContainer>
          <Button
            onPress={() => handleSaveAsset({
              ticker, quotas: Number(amount), averagePrice: Number(averagePrice),
            })}
          >
            <ButtonText>Salvar</ButtonText>
          </Button>
        </ButtonContainer>
      </SafeView>
    </Container>
  );
}

export default Registration;