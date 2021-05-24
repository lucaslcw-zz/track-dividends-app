import { useState } from 'react';

import {
  getAssets,
  saveAsset,
  editAsset,
  deleteAsset,
} from '~/tools/LocalStorage';

const useContext = () => {
  const [assets, setAssets] = useState([]);
  const [asset, setAsset] = useState(null);

  const [isVisible, setIsVisible] = useState(true);

  const handleGetAssets = () => {
    getAssets((callback: any) => {
      setAssets(callback);
    });
  }

  const handleGetAsset = (indexSelected: number) => {
    setAsset(assets[indexSelected]);
  }

  const handleSaveAsset = (asset: any) => {
    saveAsset(asset, (callback: any) => {
      setAssets(callback);
    });
  }

  const handleEditAsset = (asset: any, indexSelected: number) => {
    editAsset(asset, indexSelected, (callback: any) => {
      setAssets(callback);
    });
  }

  const handleDeleteAsset = (indexSelected: number) => {
    deleteAsset(indexSelected, (callback: any) => {
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