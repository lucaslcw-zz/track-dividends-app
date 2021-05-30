import React, { useContext } from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { currencyFormat, numberFormat } from '~/utils/CurrencyFormats';
import { inDDdays } from '~/utils/DateFormats';
import { ICardProps } from '~/@types';
import { AssetContext } from '~/context/AssetContext';
import { SettingContext } from '~/context/SettingContext';

import {
  Container,
  Button,
  HeaderText,
  FooterText,
  Row,
  Column,
  EditButton,
  DeleteButton,
} from './styles';

const CardComponent: React.FC<ICardProps> = (props: ICardProps) => {
  const {
    ticker,
    quotas,
    dividendsPerShare,
    index,
    paymentDate,
    isDividendsScreen,
    isWalletScreen,
    isModal,
  } = props;

  const { handleDeleteAsset } = useContext(AssetContext);
  const { isVisible } = useContext(SettingContext);

  const navigation = useNavigation();

  if (isDividendsScreen) {
    const renderDividendsPerShare = () => {
      if (dividendsPerShare !== null) {
        return currencyFormat(quotas * numberFormat(dividendsPerShare));
      }
      return 'Não Informado';
    };

    const renderPaymentDate = () => {
      if (paymentDate !== null) {
        return inDDdays(paymentDate);
      }
      return 'Não Informado';
    };

    return (
      <Container>
        <Button justifyContent="center" disabled>
          <Row>
            <HeaderText>{ticker}</HeaderText>
            <HeaderText>{isVisible ? renderDividendsPerShare() : 'R$ ***'}</HeaderText>
          </Row>
          <Row>
            <FooterText>
              {isVisible ? quotas : '***'}
              {' '}
              cotas
            </FooterText>
            <FooterText>{renderPaymentDate()}</FooterText>
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
            <FooterText>
              {isVisible ? quotas : '***'}
              {' '}
              cotas
            </FooterText>
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
};

export default CardComponent;
