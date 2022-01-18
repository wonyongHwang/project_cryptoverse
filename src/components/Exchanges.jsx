import React from 'react';
import millify from 'millify';
import { Row, Col, Statistic } from 'antd';
import { useGetStatsQuery } from '../services/cryptoApi';
import Loader from './Loader';

// const { Title } = Typography;
const Exchanges = () => {
  const { data, isFetching } = useGetStatsQuery();
  const exchangesList = data?.data;
 // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;
  return (
    <>
      <div className="exchange-container">
        <Row gutter={[32, 32]}>
          <Col span={12}><Statistic title="Total Coins" value={exchangesList.totalCoins} /></Col>
          <Col span={12}><Statistic title="Total Markets" value={exchangesList.totalMarkets} /></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={exchangesList.totalExchanges} /></Col>
          <Col span={12}><Statistic title="Total Market Caps" value={millify(exchangesList.totalMarketCap)} /></Col>
          <Col span={12}><Statistic title="Total 24h Volumes" value={millify(exchangesList.totalMarketCap)} /></Col>
        </Row>
      </div>
      {/* <div className="coin-heading-container">
        <p>Total Coins : {exchangesList.totalCoins}</p>
        <p>Total Markets : {exchangesList.totalMarkets}</p>
        <p>Total Exchanges : {exchangesList.totalExchanges}</p>
        <p>Total Market Caps : {millify(exchangesList.totalMarketCap)}</p>
        <p>Total 24h Volumes : {millify(exchangesList.totalMarketCap)}</p>
      </div> */}
    </>
  );
};

export default Exchanges;
