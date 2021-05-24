import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { IRenderItem } from '~/@types';
import Assets from '~/mock/Assets.json';
import Card from '~/components/Card';

import {
  Container,
  SafeView,
  Actions,
  CloseButton,
  InputContainer,
  Input,
  ListContainer,
  Header,
  Title,
  List,
} from '~/screens/AssetsList/styles';

const AssetsList: React.FC = () => {
  const [asset, setAsset] = useState<string>('');

  const navigation = useNavigation();

  return (
    <Container>
      <SafeView>
        <Actions>
          <CloseButton onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={32} color="black" />
          </CloseButton>
        </Actions>
        <InputContainer>
          <Input
            placeholder='Digite um ativo...'
            selectionColor='#000'
            placeholderTextColor='#BDBDBD'
            onChangeText={(text: string) => setAsset(text)}
            autoFocus
            value={asset}
          />
        </InputContainer>
        <ListContainer>
          <Header>
            <Title>Selecione o ativo</Title>
          </Header>
          <List
            data={Assets}
            renderItem={({ item, index }: IRenderItem) => (
              <Card
                ticker={item.ticker}
                index={index}
                isModal
              />
            )}
            keyExtractor={(item, index: number) => index.toString()}
          />
        </ListContainer>
      </SafeView>
    </Container>
  );
}

export default AssetsList;