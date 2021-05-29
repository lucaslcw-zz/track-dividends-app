import React, { useMemo, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { IAsset, IRenderItem } from '~/@types';
import Assets from '~/mock/Assets.json';
import { currencyFormat } from '~/utils/CurrencyFormats';
import { AssetContext } from '~/context/AssetContext';

import Header from '~/components/Header';
import Card from '~/components/Card';

import { Container, List } from '~/screens/Dividends/styles';

const DividendsScreen: React.FC = () => {
  const { assets } = useContext(AssetContext);

  const amountReceivable = useMemo(() => {
    return assets.reduce((accumulator: number, current: IAsset) => {
      const arrayFiltered = Assets.filter((asset) => asset.ticker === current.ticker);
      const { dividendPerShare } = arrayFiltered[0];

      return accumulator + (current.quotas * dividendPerShare);
    }, 0);
  }, [assets]);

  return (
    <Container>
      <StatusBar style="auto" />
      <Header
        title="Dividendos estimados no mês de"
        value={amountReceivable}
        isDividendsScreen
      />
      <List
        data={assets}
        renderItem={({ item, index }: IRenderItem) => {
          const arrayFiltered = Assets.filter((asset) => asset.ticker === item.ticker);
          const { dividendPerShare, payday } = arrayFiltered[0];

          return (
            <Card
              ticker={item.ticker}
              quotas={item.quotas}
              index={index}
              dividendsPerShare={currencyFormat(item.quotas * dividendPerShare)}
              payday={payday}
              isDividendsScreen
            />
          )
        }}
        keyExtractor={(item, index: number) => index.toString()}
      />
    </Container>
  );
}

export default DividendsScreen;