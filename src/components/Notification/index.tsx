import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { INotificationProps } from '~/@types';

import {
  Wrapper,
  Container,
  Icon,
  Message,
  Text,
} from '~/components/Notification/styles';

const Notification = ({ animation, notification }: INotificationProps) => (
  <Wrapper style={{ transform: [{ translateY: animation }] }}>
    <Container>
      <Icon>
        {notification.status === 'success' ? (
          <FontAwesome name="check-square" size={24} color="black" />
        ) : (
          <FontAwesome name="window-close" size={24} color="black" />
        )}
      </Icon>
      <Message>
        <Text>{notification.message}</Text>
      </Message>
    </Container>
  </Wrapper>
);

export default Notification;
