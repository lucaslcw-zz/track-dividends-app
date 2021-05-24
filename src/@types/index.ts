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

export interface IContextValues {
  assets: any[],
  asset: null,
  isVisible: boolean,
  handleGetAssets: () => void,
  handleGetAsset: (indexSelected: number) => void,
  handleSaveAsset: (asset: any) => void,
  handleEditAsset: (asset: any, indexSelected: number) => void,
  handleDeleteAsset: (indexSelected: number) => void,
  handleToggleIsVisible: () => void,
}

export interface IAsset {
  averagePrice: number,
  quotas: number,
  ticker: string,
}