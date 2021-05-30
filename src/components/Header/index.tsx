import React, { useContext } from 'react';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { IHeaderProps } from '~/@types';
import { SettingContext } from '~/context/SettingContext';
import { currencyFormat } from '~/utils/CurrencyFormats';
import Months from '~/mock/Months.json';

import {
  Container,
  Actions,
  ShowButton,
  AddButton,
  Header,
  Title,
  Month,
  Value,
} from './styles';

const HeaderComponent: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const {
    title,
    value,
    isWalletScreen,
    isDividendsScreen,
  } = props;

  const { isVisible, handleToggleIsVisible } = useContext(SettingContext);

  const navigation = useNavigation();

  if (isWalletScreen) {
    return (
      <Container>
        <Actions>
          <ShowButton onPress={handleToggleIsVisible}>
            <FontAwesome name={isVisible ? 'eye' : 'eye-slash'} size={28} color="black" />
          </ShowButton>
          <AddButton onPress={() => navigation.navigate('AssetsList')}>
            <Entypo name="plus" size={28} color="black" />
          </AddButton>
        </Actions>
        <Header>
          <Title>
            {title}
            {' '}
            <Month>{Months[new Date().getMonth()]}</Month>
          </Title>
          <Value>{isVisible ? currencyFormat(value) : 'R$ ***'}</Value>
        </Header>
      </Container>
    );
  }

  if (isDividendsScreen) {
    return (
      <Container>
        <Actions>
          <ShowButton onPress={handleToggleIsVisible}>
            <FontAwesome name={isVisible ? 'eye' : 'eye-slash'} size={28} color="black" />
          </ShowButton>
        </Actions>
        <Header>
          <Title>
            {title}
            {' '}
            <Month>{Months[new Date().getMonth()]}</Month>
          </Title>
          <Value>{isVisible ? currencyFormat(value) : 'R$ ***'}</Value>
        </Header>
      </Container>
    );
  }

  return null;
};

export default HeaderComponent;
