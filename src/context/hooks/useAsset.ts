import { useState, useContext } from 'react';

import { NotificationContext } from '~/context/NotificationContext';
import { IAsset } from '~/@types';

import {
  getAssets,
  saveAsset,
  editAsset,
  deleteAsset,
} from '~/tools/LocalStorage';

const useAsset = () => {
  const [assets, setAssets] = useState<IAsset[]|[]>([]);
  const [asset, setAsset] = useState<IAsset|null>(null);

  const { handleDisplayNotification } = useContext(NotificationContext);

  const handleGetAssets = async () => {
    getAssets()
      .then((result: IAsset[]|[]) => setAssets(result))
      .catch(() => {
        handleDisplayNotification({
          message: 'Houve um problema, tente novamente.',
          status: 'error',
        });
      });
  };

  const handleGetAsset = async (indexSelected: number) => {
    setAsset(assets[indexSelected]);
  };

  const handleSaveAsset = async (asset: IAsset) => {
    saveAsset(asset)
      .then((result: IAsset[]) => {
        setAssets(result);
        handleDisplayNotification({
          message: `O ativo ${asset.ticker} foi cadastrado com sucesso.`,
          status: 'success',
        });
      })
      .catch(() => {
        handleDisplayNotification({
          message: 'Houve um problema, tente novamente.',
          status: 'error',
        });
      });
  };

  const handleEditAsset = async (asset: IAsset, indexSelected: number) => {
    editAsset(asset, indexSelected)
      .then((result: IAsset[]) => {
        setAssets(result);
        handleDisplayNotification({
          message: `O ativo ${asset.ticker} foi editado com sucesso.`,
          status: 'success',
        });
      })
      .catch(() => {
        handleDisplayNotification({
          message: 'Houve um problema, tente novamente.',
          status: 'error',
        });
      });
  };

  const handleDeleteAsset = async (indexSelected: number, ticker: string) => {
    deleteAsset(indexSelected)
      .then((result: IAsset[]|[]) => {
        setAssets(result);
        handleDisplayNotification({
          message: `O ativo ${ticker} foi deletado com sucesso.`,
          status: 'success',
        });
      })
      .catch(() => {
        handleDisplayNotification({
          message: 'Houve um problema, tente novamente.',
          status: 'error',
        });
      });
  };

  return {
    assets,
    asset,
    handleGetAssets,
    handleGetAsset,
    handleSaveAsset,
    handleEditAsset,
    handleDeleteAsset,
  };
};

export default useAsset;
