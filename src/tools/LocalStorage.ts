/* eslint-disable arrow-body-style */
import AsyncStorage from '@react-native-async-storage/async-storage';

import keys from '~/config/LocalStorageKeys';
import { IAsset } from '~/@types';

export const getAssets = async (): Promise<IAsset[]|[]> => {
  return new Promise((resolve) => {
    AsyncStorage.getItem(keys.assets)
      .then((result) => {
        if (result !== null) return resolve(JSON.parse(result));

        return resolve([]);
      });
  });
};

export const editAsset = async (asset: IAsset, indexSelected: number): Promise<IAsset[]> => {
  return new Promise((resolve) => {
    AsyncStorage.getItem(keys.assets)
      .then((result) => {
        if (result !== null) {
          const assetsArray = JSON.parse(result);

          assetsArray[indexSelected] = asset;

          AsyncStorage.setItem(keys.assets, JSON.stringify(assetsArray));
          resolve(assetsArray);
        }
      });
  });
};

export const saveAsset = async (asset: IAsset): Promise<IAsset[]> => {
  return new Promise((resolve) => {
    AsyncStorage.getItem(keys.assets)
      .then((result) => {
        if (result !== null) {
          const assetsArray = JSON.parse(result);
          assetsArray.push(asset);

          AsyncStorage.setItem(keys.assets, JSON.stringify(assetsArray));
          resolve(assetsArray);
        } else {
          AsyncStorage.setItem(keys.assets, JSON.stringify([{ ...asset }]));
          resolve([{ ...asset }]);
        }
      });
  });
};

export const deleteAsset = async (indexSelected: number): Promise<IAsset[]|[]> => {
  return new Promise((resolve) => {
    AsyncStorage.getItem('@assets')
      .then((result) => {
        if (result !== null) {
          const assetsArray = JSON.parse(result);
          const newAssetsArray = assetsArray.filter((item: IAsset, index: number) => (
            index !== indexSelected
          ));

          AsyncStorage.setItem('@assets', JSON.stringify(newAssetsArray));
          resolve(newAssetsArray);
        }
      });
  });
};
