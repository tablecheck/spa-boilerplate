import { ordered as orderedLocales } from '@tablecheck/locales';
import { useTranslation } from 'react-i18next';
import { Route, Switch, Redirect } from 'react-router-dom';

import { About } from 'Pages/About';
import { Home } from 'Pages/Home';
import { ReportIssue } from 'Pages/ReportIssue';
import { AppRoute } from 'enums';

import { PageLayout } from './Layouts/Page';

export const SUPPORTED_LOCALES = orderedLocales.map(({ code }) => code);

export function Router({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element {
  const [, { language }] = useTranslation();
  const localePath = `:locale(${SUPPORTED_LOCALES.join('|')})`;

  return (
    <Switch>
      <Route path={`/${localePath}/${AppRoute.About}`}>
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
          <About />
        </PageLayout>
      </Route>
      <Route path={`/${localePath}/${AppRoute.ReportIssue}`}>
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
          <ReportIssue />
        </PageLayout>
      </Route>
      <Route path={`/${localePath}`}>
        <PageLayout isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
          <Home />
        </PageLayout>
      </Route>
      <Redirect to={`/${language}`} />
    </Switch>
  );
}
