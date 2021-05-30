import React, { useState, useMemo } from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { sortAlphabetically } from '~/tools/Sorts';
import { IRenderItem } from '~/@types';
import Assets from '~/mock/Assets.json';
import Card from '~/components/Card';

import {
  Container,
  Actions,
  CloseButton,
  InputContainer,
  Icon,
  Input,
  ListContainer,
  Header,
  Title,
  List,
} from '~/screens/AssetsList/styles';

const AssetsList: React.FC = () => {
  const [asset, setAsset] = useState<string>('');

  const navigation = useNavigation();

  const filteredData = useMemo(() => {
    const sorteredData = sortAlphabetically(Assets);

    if (asset !== '') {
      return sorteredData.filter((item: any) => item.ticker.includes(asset));
    }
    return sorteredData;
  }, [asset]);

  return (
    <Container>
      <StatusBar style="dark" />
      <Actions>
        <CloseButton onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle" size={32} color="black" />
        </CloseButton>
      </Actions>
      <InputContainer>
        <Icon>
          <AntDesign name="search1" size={20} color="black" />
        </Icon>
        <Input
          placeholder="Digite um ativo..."
          selectionColor="#000"
          maxLength={10}
          placeholderTextColor="#BDBDBD"
          onChangeText={(text: string) => setAsset(text.toUpperCase())}
          autoFocus
          value={asset}
        />
      </InputContainer>
      <ListContainer>
        <Header>
          <Title>Selecione o ativo</Title>
        </Header>
        <List
          data={filteredData}
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
    </Container>
  );
};

export default AssetsList;
