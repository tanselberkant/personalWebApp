import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();
  console.log('themes', themes);
  console.log('theme', theme);
  return (
    <>
      {theme === 'dark' ? (
        <button
          onClick={() => {
            setTheme('light');
          }}
          className="flex items-center gap-x-3 p-2 text-red-400"
        >
          <SunIcon className="h-5 w-5 text-primary hover:text-dark-secondary " />
          <span>Light Mode</span>
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme('dark');
          }}
          className="flex items-center gap-x-3 p-2 text-red-400"
        >
          <MoonIcon className="h-5 w-5 text-primary hover:text-dark-secondary" />
          <span>Dark Mode</span>
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
