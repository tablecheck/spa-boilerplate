import { IdProvider } from '@radix-ui/react-id';
import '@tablecheck/tablekit-free-icon-config';
import { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from 'Common/Theme';
import { MainWrapper } from 'Layouts';
import { Footer } from 'Layouts/Footer';
import { TopNav } from 'Layouts/TopNav';

import { i18n } from './i18n';
import { Router } from './router';

export function App(): JSX.Element {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <IdProvider>
      <I18nextProvider i18n={i18n}>
        <AppThemeProvider isDarkMode={isDarkMode} setDarkMode={setDarkMode}>
          <BrowserRouter basename={CONFIG.baseName}>
            <MainWrapper>
              <TopNav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
              <Router />
              <Footer />
            </MainWrapper>
          </BrowserRouter>
        </AppThemeProvider>
      </I18nextProvider>
    </IdProvider>
  );
}
