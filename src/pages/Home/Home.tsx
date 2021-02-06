import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useReactRouter from 'use-react-router';

import * as selectors from 'stores/selectors';
import * as actionsNews from 'stores/providers/news/actions';

import { Image, Input, Button, Chip, CHIP_SIZE } from 'components';

import { APP_API_URL, APP_SECRET } from 'settings';

import globe from 'assets/images/globe.jpg';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { history, location, match } = useReactRouter();

  const fetchNews = useCallback(() => dispatch(actionsNews.fetchItems()), [dispatch]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const { ui, data } = useSelector(selectors.newsItems);

  const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>, value: any) =>
    console.info('change: ', {
      e,
      name,
      value,
    });

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ui, data }) }}
        style={{ padding: '15px', border: '1px solid blue', marginBottom: '20px' }}
      />

      <Chip label="Chip size s" size={CHIP_SIZE.s} />
      <Chip label="Chip size m" size={CHIP_SIZE.m} />
      <Chip label="Chip size l" size={CHIP_SIZE.l} />
      <Chip label="Chip size x" size={CHIP_SIZE.x} />

      <Image width={100} height={100} src={globe} alt="Globe" />

      <span>
        <Image width={100} height={100} src={globe} alt="" />
      </span>

      <img height={100} src={globe} alt="" />

      <div>My location is {location.pathname}!</div>
      <div>location: {JSON.stringify(location)}!</div>
      <div>history: {JSON.stringify(history)}!</div>
      <div>match: {JSON.stringify(match)}!</div>

      <h2>Home</h2>
      <Button>This is a hotpink button.</Button>
      <br />

      <div>1&nbsp;&nbsp;&nbsp;2</div>

      <div style={{ marginBottom: 20 }}>
        <Input onChange={handleChange('v1')} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input onChange={handleChange('v2')} value={1} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <Input value="xxxx" />
      </div>

      <div>API_URL: {APP_API_URL}</div>
      <div>REACT_APP_SECRET: {APP_SECRET}</div>

      <h2>{t('title', { count: 10 })}</h2>
      <h2>{t('example')}</h2>
      <h2>age.label: {t('age.label')}</h2>

      <br />

      <br />

      <div>{t('name.label')}</div>
      <div>{t('home.label')}</div>
    </div>
  );
};

export default Home;
