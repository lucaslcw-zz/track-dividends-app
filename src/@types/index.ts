/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export interface ICardProps {
  ticker: string,
  quotas?: any,
  dividendsPerShare?: any,
  index: number,
  paymentDate?: any,
  isDividendsScreen?: boolean,
  isWalletScreen?: boolean,
  isModal?: boolean,
}

export interface IButtonProps {
  flexDirection?: string,
  justifyContent?: string,
  alignItems?: string,
}

export interface IHeaderProps {
  title: string,
  value: number,
  isWalletScreen?: boolean,
  isDividendsScreen?: boolean,
}

export interface IAsset {
  averagePrice: number,
  quotas: number,
  ticker: string,
}

export interface IAssetContext {
  assets: IAsset[],
  asset: any,
  handleGetAssets: () => void,
  handleGetAsset: (indexSelected: number) => void,
  handleSaveAsset: (asset: IAsset) => void,
  handleEditAsset: (asset: IAsset, indexSelected: number) => void,
  handleDeleteAsset: (indexSelected: number, ticker: string) => void,
}

export interface ISettingContext {
  isVisible: boolean,
  handleToggleIsVisible: () => void,
}

export interface ISettingContextProviderProps {
  children?: ReactNode,
}

export interface IAssetContextProviderProps {
  children?: ReactNode,
}

export interface INotificationContext {
  handleDisplayNotification: ({ message, status }: INotificationParams) => void,
}

export interface INotificationParams {
  message: string,
  status: string,
}

export interface INotificationProviderProps {
  children?: ReactNode,
}

export interface IRenderItem {
  item: IAsset|any,
  index: number,
}

export interface INotificationProps {
  animation: any,
  notification: INotificationParams,
}
