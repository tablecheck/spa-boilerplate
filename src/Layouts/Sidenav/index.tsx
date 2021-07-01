import { faBug } from '@fortawesome/pro-light-svg-icons/faBug';
import { faGlobe } from '@fortawesome/pro-light-svg-icons/faGlobe';
import { faQuestionCircle } from '@fortawesome/pro-light-svg-icons/faQuestionCircle';
import { faTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import { ordered } from '@tablecheck/locales';
import { ButtonAppearance } from '@tablekit/button';
import { Icon } from '@tablekit/icon';
import { Item } from '@tablekit/item';
import { LanguageSelector, View } from '@tablekit/language-selector';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { tciSun } from 'tablecheck-icons/tciSun';

import { AppRoute } from 'enums';

import {
  SidenavWrapper,
  CloseButton,
  SidenavItems,
  MobileOnlyItems
} from './styles';

export const Sidenav = ({
  isOpen,
  setOpen,
  isDarkMode,
  setDarkMode,
  changeLanguage
}: {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
  changeLanguage: (locale: string) => void;
}): JSX.Element | null => {
  const [t, { language }] = useTranslation();

  const onOutsideClickPanel = useCallback(
    (event) => {
      const button = document.querySelector('#button-left');
      if (!button?.contains(event.target)) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  const currentLocale = ordered.find((locale) => locale.code === language);

  if (!language || !ordered) return null;

  return (
    <SidenavWrapper
      isOpen={isOpen}
      togglePanel={() => setOpen(false)}
      width="300px"
      onClickOutside={onOutsideClickPanel}
    >
      <CloseButton
        onClick={() => setOpen(!isOpen)}
        appearance={ButtonAppearance.Subtle}
        iconBefore={<Icon icon={faTimes} />}
      />
      <SidenavItems>
        <Item
          as={Link}
          to={`/${language}/${AppRoute.About}`}
          elemBefore={<Icon icon={faQuestionCircle} />}
          onClick={() => setOpen(false)}
        >
          {t('attributes:links:about')}
        </Item>
        <Item
          as={Link}
          to={`/${language}/${AppRoute.ReportIssue}`}
          elemBefore={<Icon icon={faBug} />}
          onClick={() => setOpen(false)}
        >
          {t('attributes:links:report_issue')}
        </Item>
        <MobileOnlyItems>
          <Item
            elemBefore={<Icon icon={tciSun} />}
            onClick={() => {
              setDarkMode(!isDarkMode);
              setOpen(false);
            }}
          >
            {t('actions:toggle_theme')}
          </Item>
          <LanguageSelector
            currentLanguage={language}
            locales={ordered}
            shouldShowCloseIcon
            view={View.Mobile}
            itemWidth="100%"
            onChangeLanguage={changeLanguage}
            renderTrigger={({ onClick, ref }) => (
              <Item
                onClick={onClick}
                ref={ref}
                elemBefore={<Icon icon={faGlobe} />}
              >
                {currentLocale?.label}
              </Item>
            )}
          />
        </MobileOnlyItems>
      </SidenavItems>
    </SidenavWrapper>
  );
};
