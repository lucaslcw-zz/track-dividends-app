import React, { useContext } from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { inDDdays } from '~/utils/DateFormats';
import { ICardProps } from '~/@types';
import { Context } from '~/context/Context';

import {
  Container,
  Button,
  HeaderText,
  FooterText,
  Row,
  Column,
  EditButton,
  DeleteButton
} from './styles';

const CardComponent: React.FC<ICardProps> = (props: ICardProps) => {
  const {
    ticker,
    quotas,
    dividendsPerShare,
    index,
    payday,
    isDividendsScreen,
    isWalletScreen,
    isModal,
  } = props;

  const { isVisible, handleDeleteAsset } = useContext(Context);

  const navigation = useNavigation();

  if (isDividendsScreen) {
    return (
      <Container>
        <Button justifyContent="center" disabled>
          <Row>
            <HeaderText>{ticker}</HeaderText>
            <HeaderText>{isVisible ? dividendsPerShare : 'R$ ***'}</HeaderText>
          </Row>
          <Row>
            <FooterText>{isVisible ? quotas : '***'} cotas</FooterText>
            <FooterText>{inDDdays(payday)}</FooterText>
          </Row>
        </Button>
      </Container>
    );
  }

  if (isWalletScreen) {
    return (
      <Container>
        <Button alignItems="center" justifyContent="space-between" flexDirection="row" disabled>
          <Column>
            <HeaderText>{ticker}</HeaderText>
            <FooterText>{isVisible ? quotas : '***'} cotas</FooterText>
          </Column>
          <Row>
            <EditButton onPress={() => navigation.navigate('Edit', { index })}>
              <MaterialIcons name="edit" size={24} color="black" />
            </EditButton>
            <DeleteButton onPress={() => handleDeleteAsset(index)}>
              <FontAwesome name="trash" size={24} color="black" />
            </DeleteButton>
          </Row>
        </Button>
      </Container>
    );
  }

  if (isModal) {
    return (
      <Container>
        <Button
          justifyContent="center"
          onPress={() => navigation.navigate('Registration', { ticker })}
        >
          <Row>
            <HeaderText>{ticker}</HeaderText>
          </Row>
        </Button>
      </Container>
    );
  }

  return null;
}

export default CardComponent;