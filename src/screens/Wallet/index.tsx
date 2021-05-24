import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useEffect, useContext } from 'react';

import { IAsset } from '~/@types';
import { Context } from '~/context/Context';

import Header from '~/components/Header';
import Card from '~/components/Card';

import { Container, List } from '~/screens/Wallet/styles';

const WalletScreen: React.FC = () => {
  const { assets, handleGetAssets } = useContext(Context);

  const investedBalance: number = useMemo(() => {
    return assets.reduce((accumulator: number, current: IAsset) => {
      return accumulator + (current.quotas * current.averagePrice);
    }, 0);
  }, [assets]);

  useEffect(() => {
    handleGetAssets();
  }, []);

  return (
    <Container>
      <StatusBar style="auto" />
      <Header
        title="Valor total investido até o mês de"
        value={investedBalance}
        isWalletScreen
      />
      <List
        data={assets}
        renderItem={({ item, index }: any) => (
          <Card
            ticker={item.ticker}
            quotas={item.quotas}
            index={index}
            isWalletScreen
          />
        )}
        keyExtractor={(item: any, index: any) => index.toString()}
      />
    </Container>
  );
}

export default WalletScreen;