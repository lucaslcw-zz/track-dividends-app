import { ReactNode } from "react";

export interface ICardProps {
  ticker: string,
  quotas?: number,
  dividendsPerShare?: string,
  index: number,
  payday?: number,
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

export interface IAssetContext {
  assets: IAsset[],
  asset: any,
  handleGetAssets: () => void,
  handleGetAsset: (indexSelected: number) => void,
  handleSaveAsset: (asset: IAsset) => void,
  handleEditAsset: (asset: IAsset, indexSelected: number) => void,
  handleDeleteAsset: (indexSelected: number) => void,
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

export interface IAsset {
  averagePrice: number,
  quotas: number,
  ticker: string,
}

export interface IRenderItem {
  item: IAsset|any,
  index: number,
}