import React, { createContext } from 'react';

import { IContextValues, IContextProviderProps } from '~/@types';
import useContext from '~/context/hooks/useContext';

const Context = createContext<IContextValues>({
  assets: [],
  asset: null,
  isVisible: true,
  handleGetAssets: () => null,
  handleGetAsset: () => null,
  handleSaveAsset: () => null,
  handleEditAsset: () => null,
  handleDeleteAsset: () => null,
  handleToggleIsVisible: () => null,
});

const ContextProvider: React.FC = ({ children }: IContextProviderProps) => {
  const {
    assets,
    asset,
    isVisible,
    handleGetAssets,
    handleGetAsset,
    handleSaveAsset,
    handleEditAsset,
    handleDeleteAsset,
    handleToggleIsVisible,
  } = useContext();

  return (
    <Context.Provider
      value={{
        assets,
        asset,
        isVisible,
        handleGetAssets,
        handleGetAsset,
        handleSaveAsset,
        handleEditAsset,
        handleDeleteAsset,
        handleToggleIsVisible,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };