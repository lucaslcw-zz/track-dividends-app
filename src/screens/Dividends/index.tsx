import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useEffect, useContext } from 'react';

import Assets from '../../mock/Assets.json';
import { currencyFormat } from '../../utils/Formats';
import { Context } from '../../context/Context';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container, List } from './styles';

const DividendsScreen: React.FC = () => {
  const { assets, handleGetAssets } = useContext(Context);

  const amountReceivable = useMemo(() => {
    return assets.reduce((accumulator: any, current: any) => {
      const arrayFiltered = Assets.filter((asset) => asset.ticker === current.ticker);
      const { dividendPerShare } = arrayFiltered[0];

      return accumulator + (current.quotas * dividendPerShare);
    }, 0);
  }, [assets]);

  useEffect(() => {
    handleGetAssets();
  }, []);

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
        renderItem={({ item, index }: any) => {
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
        keyExtractor={(item: any, index: any) => index.toString()}
      />
    </Container>
  );
}

export default DividendsScreen;