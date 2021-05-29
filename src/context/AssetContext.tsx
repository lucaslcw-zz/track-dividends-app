import React, { createContext } from 'react';

import { IAssetContext, IAssetContextProviderProps } from '~/@types';
import useAsset from '~/context/hooks/useAsset';

const AssetContext = createContext<IAssetContext>({
  assets: [],
  asset: null,
  handleGetAssets: () => null,
  handleGetAsset: () => null,
  handleSaveAsset: () => null,
  handleEditAsset: () => null,
  handleDeleteAsset: () => null,
});

const AssetProvider: React.FC = ({ children }: IAssetContextProviderProps) => {
  const {
    assets,
    asset,
    handleGetAssets,
    handleGetAsset,
    handleSaveAsset,
    handleEditAsset,
    handleDeleteAsset,
  } = useAsset();

  return (
    <AssetContext.Provider
      value={{
        assets,
        asset,
        handleGetAssets,
        handleGetAsset,
        handleSaveAsset,
        handleEditAsset,
        handleDeleteAsset,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
}

export { AssetContext, AssetProvider };