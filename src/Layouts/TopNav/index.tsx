import { faBars } from '@fortawesome/pro-light-svg-icons';
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe';
import { ordered } from '@tablecheck/locales';
import { Button, ButtonAppearance } from '@tablekit/button';
import { Icon } from '@tablekit/icon';
import { View } from '@tablekit/language-selector';
import { LogoSymbol } from '@tablekit/logo';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { tciSun } from 'tablecheck-icons/tciSun';

import { i18n } from '../../i18n';
import { Sidenav } from '../Sidenav';

import {
  TopNavWrapper,
  TopNavContent,
  LanguageSelectorWrapper,
  LogoWrapper,
  LogoWording,
  MenuButton,
  LangSelectorButton,
  DesktopOnlyItems
} from './styles';

export const TopNav = ({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element | null => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const history = useHistory();
  const [t, { language }] = useTranslation();
  const location = useLocation();

  const currentLocale = ordered.find((locale) => locale.code === language);

  if (!language || !ordered) return null;

  const changeLanguage = (locale: string) => {
    const parts = location.pathname.split('/');
    let page = '';
    if (parts.length === 4) {
      page = `/${locale}/${parts[3]}`;
    } else if (parts.length === 3) {
      page = `/${locale}/${parts[2]}`;
    }

    history.replace(page);
    i18n.changeLanguage(locale);
  };

  return (
    <TopNavWrapper>
      <TopNavContent>
        <LogoWrapper to={`/${language}`}>
          <LogoSymbol size="24px" />
          <LogoWording>{t('keywords:app_name')}</LogoWording>
        </LogoWrapper>
        <div style={{ display: 'flex' }}>
          <DesktopOnlyItems>
            <Button
              appearance={ButtonAppearance.Subtle}
              iconBefore={<Icon icon={tciSun} />}
              onClick={() => setDarkMode(!isDarkMode)}
            />
            <LanguageSelectorWrapper
              currentLanguage={language}
              locales={ordered}
              shouldShowCloseIcon
              view={View.Desktop}
              onChangeLanguage={changeLanguage}
              renderTrigger={({ onClick, ref }) => (
                <LangSelectorButton
                  onClick={onClick}
                  ref={ref}
                  appearance={ButtonAppearance.Subtle}
                  iconBefore={<Icon icon={faGlobe} />}
                >
                  {currentLocale?.label}
                </LangSelectorButton>
              )}
            />
          </DesktopOnlyItems>
          <MenuButton
            onClick={() => setMenuOpen(!isMenuOpen)}
            appearance={ButtonAppearance.Subtle}
            iconBefore={<Icon icon={faBars} />}
          />
        </div>
      </TopNavContent>
      <Sidenav
        isOpen={isMenuOpen}
        setOpen={setMenuOpen}
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        changeLanguage={changeLanguage}
      />
    </TopNavWrapper>
  );
};
