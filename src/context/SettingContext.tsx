import React, { createContext } from 'react';

import { ISettingContext, ISettingContextProviderProps } from '~/@types';
import useSetting from '~/context/hooks/useSetting';

const SettingContext = createContext<ISettingContext>({
  isVisible: true,
  handleToggleIsVisible: () => null,
});

const SettingProvider: React.FC = ({ children }: ISettingContextProviderProps) => {
  const {
    isVisible,
    handleToggleIsVisible,
  } = useSetting();

  return (
    <SettingContext.Provider
      value={{
        isVisible,
        handleToggleIsVisible,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export { SettingContext, SettingProvider };
