/* eslint-disable arrow-body-style */
import Assets from '~/mock/Assets.json';
import { numberFormat } from '~/utils/CurrencyFormats';

import { IAsset } from '~/@types';

export const totalEstimatedDividends = (assets: IAsset[]) => {
  return assets.reduce((accumulator: any, current: any) => {
    const arrayFiltered = Assets.filter((asset) => asset.ticker === current.ticker);
    const { dividendPerShare } = arrayFiltered[0];

    if (dividendPerShare !== null) {
      return accumulator + (current.quotas * numberFormat(dividendPerShare));
    }
    return accumulator + (current.quotas * 0);
  }, 0);
};

export const totalInvestedBalance = (assets: IAsset[]) => {
  return assets.reduce((accumulator: number, current: IAsset) => {
    return accumulator + (current.quotas * current.averagePrice);
  }, 0);
};
