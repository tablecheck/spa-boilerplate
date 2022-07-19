import { Link } from '@tablecheck/tablekit-typography';
import { useTranslation } from 'react-i18next';

import { AppRoute } from 'enums';

import { FooterWrapper, FooterLink, Copyright } from './styles';

export const Footer = (): JSX.Element | null => {
  const [t, { language }] = useTranslation();

  return (
    <FooterWrapper>
      <div>
        <FooterLink to={`/${language}/${AppRoute.About}`}>
          {t('attributes.links.about')}
        </FooterLink>
        <FooterLink to={`/${language}/${AppRoute.ReportIssue}`}>
          {t('attributes.links.report_issue')}
        </FooterLink>
      </div>
      <div>
        <Link href={`http://tablecheck.com/${language}/join`} target="_blank">
          {t('attributes.links.powered_by')}
        </Link>
        <Copyright>&copy; {new Date().getFullYear()}</Copyright>
      </div>
    </FooterWrapper>
  );
};
