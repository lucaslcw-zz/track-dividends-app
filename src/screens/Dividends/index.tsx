import React, { useMemo, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import { totalEstimatedDividends } from '~/tools/Calculations';
import { IRenderItem } from '~/@types';
import Assets from '~/mock/Assets.json';
import { AssetContext } from '~/context/AssetContext';

import Header from '~/components/Header';
import Card from '~/components/Card';

import { Container, List } from '~/screens/Dividends/styles';

const DividendsScreen: React.FC = () => {
  const { assets } = useContext(AssetContext);

  const amountReceivable = useMemo(() => totalEstimatedDividends(assets), [assets]);

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
          const { dividendPerShare, paymentDate } = arrayFiltered[0];

          return (
            <Card
              ticker={item.ticker}
              quotas={item.quotas}
              index={index}
              dividendsPerShare={dividendPerShare}
              paymentDate={paymentDate}
              isDividendsScreen
            />
          );
        }}
        keyExtractor={(item, index: number) => index.toString()}
      />
    </Container>
  );
};

export default DividendsScreen;
