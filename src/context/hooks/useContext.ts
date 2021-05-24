import { useState } from 'react';

import { IAsset } from '~/@types';

import {
  getAssets,
  saveAsset,
  editAsset,
  deleteAsset,
} from '~/tools/LocalStorage';

const useContext = () => {
  const [assets, setAssets] = useState<IAsset[]|[]>([]);
  const [asset, setAsset] = useState<IAsset|null>(null);

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleGetAssets = () => {
    getAssets((callback: IAsset[]|[]) => {
      setAssets(callback);
    });
  }

  const handleGetAsset = (indexSelected: number) => {
    setAsset(assets[indexSelected]);
  }

  const handleSaveAsset = (asset: IAsset) => {
    saveAsset(asset, (callback: IAsset[]|[]) => {
      setAssets(callback);
    });
  }

  const handleEditAsset = (asset: IAsset, indexSelected: number) => {
    editAsset(asset, indexSelected, (callback: IAsset[]|[]) => {
      setAssets(callback);
    });
  }

  const handleDeleteAsset = (indexSelected: number) => {
    deleteAsset(indexSelected, (callback: IAsset[]|[]) => {
      setAssets(callback);
    });
  }

  const handleToggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return {
    assets,
    asset,
    isVisible,
    handleGetAssets,
    handleGetAsset,
    handleSaveAsset,
    handleEditAsset,
    handleDeleteAsset,
    handleToggleIsVisible,
  };
}

export default useContext;