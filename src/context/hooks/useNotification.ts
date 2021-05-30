import { useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

import NotificationSettings from '~/config/NotificationSettings';

const useNotification = () => {
  const [notification, setNotification] = useState<any>({ message: null, status: null });
  const transformAnim = useRef(new Animated.Value(NotificationSettings.initialPosition)).current;

  const handleDisplayNotification = ({ message, status }: any) => {
    setNotification({ message, status });

    Animated.timing(transformAnim, {
      toValue: NotificationSettings.offsetPosition,
      duration: NotificationSettings.openingTime,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => handleHideNotification(), NotificationSettings.openedTime);
    });
  };

  const handleHideNotification = () => {
    Animated.timing(transformAnim, {
      toValue: NotificationSettings.initialPosition,
      duration: NotificationSettings.closingTime,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  return {
    transformAnim,
    notification,
    handleDisplayNotification,
  };
};

export default useNotification;
