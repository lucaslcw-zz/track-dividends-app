import AsyncStorage from '@react-native-async-storage/async-storage';

import { IAsset, ICallback } from '~/@types';

export const getAssets = async (callback: ICallback) => {
  AsyncStorage.getItem('@assets')
    .then((result) => {
      if (result !== null) return callback(JSON.parse(result));

      return callback([]);
    });
}

export const editAsset = async (asset: IAsset, indexSelected: number, callback: ICallback) => {
  AsyncStorage.getItem('@assets')
    .then((result) => {
      if (result !== null) {
        const assetsArray = JSON.parse(result);

        assetsArray[indexSelected] = asset;

        AsyncStorage.setItem('@assets', JSON.stringify(assetsArray));
        callback(assetsArray);
      }
    })
}

export const saveAsset = async (asset: IAsset, callback: ICallback) => {
  AsyncStorage.getItem('@assets')
    .then((result) => {
      if (result !== null) {
        const assetsArray = JSON.parse(result);
        assetsArray.push(asset);

        AsyncStorage.setItem('@assets', JSON.stringify(assetsArray));
        callback(assetsArray);
      } else {
        AsyncStorage.setItem('@assets', JSON.stringify([{ ...asset }]));
        callback([{ ...asset }]);
      }
    });
}

export const deleteAsset = async (indexSelected: number, callback: ICallback) => {
  AsyncStorage.getItem('@assets')
    .then((result) => {
      if (result !== null) {
        const assetsArray = JSON.parse(result);
        const newAssetsArray = assetsArray.filter((item: IAsset, index: number) => index !== indexSelected);
        
        AsyncStorage.setItem('@assets', JSON.stringify(newAssetsArray));
        callback(newAssetsArray);
      }
    });
}