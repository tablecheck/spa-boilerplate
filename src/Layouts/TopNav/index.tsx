import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { ordered } from '@tablecheck/locales';
import { Button, ButtonAppearance } from '@tablecheck/tablekit-button';
import { Icon } from '@tablecheck/tablekit-icon';
import { View } from '@tablecheck/tablekit-language-selector';
import { LogoSymbol } from '@tablecheck/tablekit-logo';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { tciSun } from 'tablecheck-icons/tciSun';

import { getI18nextInstance } from 'i18n';

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
  const i18next = getI18nextInstance();
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
    i18next.changeLanguage(locale);
  };

  return (
    <TopNavWrapper>
      <TopNavContent>
        <LogoWrapper to={`/${language}`}>
          <LogoSymbol size="24px" />
          <LogoWording>{t('keywords.app_name')}</LogoWording>
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
