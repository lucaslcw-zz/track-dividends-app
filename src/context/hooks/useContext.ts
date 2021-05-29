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

  const handleGetAssets = async () => {
    getAssets()
      .then((result: IAsset[]|[]) => setAssets(result));
  }

  const handleGetAsset = async (indexSelected: number) => {
    setAsset(assets[indexSelected]);
  }

  const handleSaveAsset = async (asset: IAsset) => {
    saveAsset(asset)
      .then((result: IAsset[]) => setAssets(result));
  }

  const handleEditAsset = async (asset: IAsset, indexSelected: number) => {
    editAsset(asset, indexSelected)
      .then((result: IAsset[]) => setAssets(result));
  }

  const handleDeleteAsset = async (indexSelected: number) => {
    deleteAsset(indexSelected)
      .then((result: IAsset[]|[]) => setAssets(result));
  }

  const handleToggleIsVisible = () => setIsVisible(!isVisible);

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