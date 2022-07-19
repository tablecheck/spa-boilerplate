import { Footer } from '../Footer';
import { TopNav } from '../TopNav';

export function PageLayout({
  isDarkMode,
  setDarkMode,
  children
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
  children: JSX.Element;
}): JSX.Element {
  return (
    <>
      <TopNav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      {children}
      <Footer />
    </>
  );
}
