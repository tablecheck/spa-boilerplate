import { css, Global, useTheme } from '@emotion/react';
import { ordered as orderedLocales } from '@tablecheck/locales';
import { Spacing } from '@tablekit/theme';
import { commonTypographyStyles } from '@tablekit/typography';
import { useTranslation } from 'react-i18next';
import { Route, Switch, Redirect } from 'react-router-dom';

import { About } from 'Pages/About';
import { Home } from 'Pages/Home';
import { ReportIssue } from 'Pages/ReportIssue';
import { AppRoute } from 'enums';

export const SUPPORTED_LOCALES = orderedLocales.map(({ code }) => code);

export const Router = (): JSX.Element => {
  const theme = useTheme();
  const [, { language }] = useTranslation();
  const localePath = `:locale(${SUPPORTED_LOCALES.join('|')})`;

  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #root {
            height: 100%;
          }
          body {
            background-color: ${theme.colors.canvas};
          }
          p {
            margin: ${Spacing.L4} 0;
          }
          ${commonTypographyStyles};
        `}
      />
      <Switch>
        <Route path={`/${localePath}/${AppRoute.About}`}>
          <About />
        </Route>
        <Route path={`/${localePath}/${AppRoute.ReportIssue}`}>
          <ReportIssue />
        </Route>
        <Route path={`/${localePath}`}>
          <Home />
        </Route>
        <Redirect to={`/${language}`} />
      </Switch>
    </>
  );
};
