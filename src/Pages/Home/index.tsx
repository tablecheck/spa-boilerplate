import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { HomeWrapper, HomeHeadline } from './styles';

export const Home = (): JSX.Element => {
  const [t, { language }] = useTranslation();

  return (
    <HomeWrapper>
      <HomeHeadline>{t('attributes:titles:headline')}</HomeHeadline>
      <Helmet>
        <title lang={language}>{`${t('attributes:titles:headline')} - ${t(
          'keywords:app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
};
