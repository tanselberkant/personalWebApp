'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
// import { motion, AnimatePresence } from 'framer-motion';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === 'dark' ? (
        <button
          onClick={() => {
            setTheme('light');
          }}
          className=" w-full flex items-center gap-x-3 p-2 text-light-textDescription dark:text-dark-textDescription hover:text-blue-900 dark:hover:text-[yellow]"
        >
          <SunIcon className="h-5 w-5" />
          <span>Light</span>
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme('dark');
          }}
          className="w-full flex items-center gap-x-3 p-2 text-light-textDescription dark:text-dark-textDescription hover:text-blue-900 dark:hover:text-[yellow]   "
        >
          <MoonIcon className="h-5 w-5 " />
          <span>Dark </span>
        </button>
      )}
    </>
  );
};

export default ThemeSwitcher;
