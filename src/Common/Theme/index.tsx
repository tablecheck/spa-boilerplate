import { Theme } from '@emotion/react';
import { LocaleCode } from '@tablecheck/locales';
import {
  buttonClassicTheme,
  buttonDarkTheme,
  buttonThemeNamespace
} from '@tablekit/button';
import { ThemeProvider } from '@tablekit/theme';
import { ReactNode, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { defaultTheme } from './Themes/default';

export const AppThemeProvider = ({
  isDarkMode,
  setDarkMode,
  children
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
  children: ReactNode;
}): JSX.Element => {
  const [, { language }] = useTranslation();
  const isRtl = [LocaleCode.Arabic].indexOf(language as LocaleCode) !== -1;
  const selectedTheme = defaultTheme;

  useEffect(() => {
    if (window.matchMedia) {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      const isSystemDark = media.matches;
      setDarkMode(isSystemDark);

      const listener = (e: MediaQueryListEvent) => {
        setDarkMode(e.matches);
      };

      if (media.addEventListener) {
        media.addEventListener('change', listener);
      } else {
        // Safari and IE
        media.addListener(listener);
      }

      return () => {
        if (media.removeEventListener) {
          media.removeEventListener('change', listener);
        } else {
          media.removeListener(listener);
        }
      };
    }

    return undefined;
  }, [selectedTheme, setDarkMode]);

  const theme = useMemo<Partial<Theme>>(() => {
    const updatedTheme = isDarkMode
      ? {
          ...selectedTheme.dark,
          [buttonThemeNamespace]: buttonDarkTheme
        }
      : {
          ...selectedTheme.classic,
          [buttonThemeNamespace]: buttonClassicTheme
        };

    return {
      ...updatedTheme,
      isRtl
    };
  }, [isDarkMode, selectedTheme, isRtl]);

  return (
    <ThemeProvider
      locale={language}
      theme={theme}
      isDark={isDarkMode}
      renderHeadNodes={(nodes) => <Helmet>{nodes}</Helmet>}
    >
      {children}
    </ThemeProvider>
  );
};
