import React, { createContext } from 'react';

import { INotificationContext, INotificationProviderProps } from '~/@types';
import useNotification from '~/context/hooks/useNotification';

import Notification from '~/components/Notification';

const NotificationContext = createContext<INotificationContext>({
  handleDisplayNotification: () => {},
});

const NotificationProvider: React.FC = ({ children }: INotificationProviderProps) => {
  const {
    transformAnim,
    notification,
    handleDisplayNotification,
  } = useNotification();

  return (
    <NotificationContext.Provider value={{ handleDisplayNotification }}>
      <Notification
        animation={transformAnim}
        notification={notification}
      />
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
