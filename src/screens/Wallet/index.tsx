import React, { useMemo, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { IAsset, IRenderItem } from '~/@types';
import { AssetContext } from '~/context/AssetContext';

import Header from '~/components/Header';
import Card from '~/components/Card';

import { Container, List } from '~/screens/Wallet/styles';

const WalletScreen: React.FC = () => {
  const { assets } = useContext(AssetContext);

  const investedBalance: number = useMemo(() => {
    return assets.reduce((accumulator: number, current: IAsset) => {
      return accumulator + (current.quotas * current.averagePrice);
    }, 0);
  }, [assets]);

  return (
    <Container>
      <StatusBar style='dark' />
      <Header
        title="Valor total investido até o mês de"
        value={investedBalance}
        isWalletScreen
      />
      <List
        data={assets}
        renderItem={({ item, index }: IRenderItem) => (
          <Card
            ticker={item.ticker}
            quotas={item.quotas}
            index={index}
            isWalletScreen
          />
        )}
        keyExtractor={(item, index: number) => index.toString()}
      />
    </Container>
  );
}

export default WalletScreen;