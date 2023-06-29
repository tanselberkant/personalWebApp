'use client';
import React, { Fragment, useState, useContext, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  HomeIcon,
  XMarkIcon,
  PencilIcon,
  IdentificationIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import NavbarLogo from './NavbarLogo';
import ThemeSwitcher from './ThemeSwitcher';
import { Inconsolata } from 'next/font/google';
import SocialLinks from './SocialLinks';
const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  currentPath: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  currentPath,
}) => {
  useEffect(() => {
    window.scrollTo(0, 9);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: HomeIcon, current: currentPath === '/' },
    {
      name: 'Posts',
      href: '/posts',
      icon: PencilIcon,
      current: currentPath === '/posts',
    },
    {
      name: 'Resume',
      href: '/resume',
      icon: IdentificationIcon,
      current: currentPath === '/resume',
    },
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: ChartBarIcon,
      current: currentPath === '/dashboard',
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className={`h-6 w-6 text-light-textDescription dark:text-dark-textDescription`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-10 overflow-y-auto  px-6 pb-4 bg-light-primary dark:bg-dark-primary">
                  <div className="flex h-16 shrink-0 items-center">
                    <NavbarLogo />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul
                      role="list"
                      className="flex flex-1 flex-col gap-y-7 font-custom "
                    >
                      <li>
                        <ul role="list" className="-mx-2 space-y-8">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? `bg-light-secondary dark:bg-dark-secondary text-light-smallHeader dark:text-dark-smallHeader`
                                    : `text-light-textDescription dark:text-dark-textDescription hover:text-light-primary hover:bg-light-textHeader dark:hover:text-dark-primary dark:hover:bg-dark-textHeader`,
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? `text-light-smallHeader dark:text-dark-smallHeader`
                                      : `text-light-textDescription dark:text-dark-textDescription  `,
                                    `h-5 w-5 shrink-0 group-hover:text-light-primary dark:group-hover:text-dark-primary `
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                          <ThemeSwitcher />
                        </ul>
                        <SocialLinks />
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56 lg:flex-col font-custom">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div
          className={`flex grow flex-col gap-y-5 overflow-y-auto border-r border-light-secondary dark:border-dark-secondary  bg-light-primary dark:bg-dark-primary px-6 pb-4`}
        >
          <div className="flex h-16 shrink-0 items-center ">
            <NavbarLogo />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li className=" px-6">
                <ul role="list" className="-mx-2 space-y-6">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          item.current
                            ? ` border-1 rounded-full border-light-secondary dark:border-dark-secondary  text-light-smallHeader dark:text-dark-smallHeader hover:text-light-secondary dark:hover:text-dark-secondary`
                            : `text-light-textDescription dark:text-dark-textDescription hover:text-light-secondary  dark:hover:text-dark-secondary hover:border-1 hover:border-light-secondary dark:hover:border-dark-secondary roundend-full`,
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? `text-light-smallHeader dark:text-dark-smallHeader`
                              : `text-light-textDescription dark:text-dark-textDescription  `,
                            `h-5 w-5 shrink-0 group-hover:text-light-secondary  dark:group-hover:text-dark-secondary `
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}

                  {/* THEME BUTTON */}
                  <ThemeSwitcher />
                </ul>
                <SocialLinks />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={`lg:pl-56 bg-light-primary dark:bg-dark-primary text-light-textDescription dark:text-dark-textDescription`}
      >
        <div
          className={`sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b  border-light-secondary dark:border-dark-secondary bg-transparent backdrop-blur px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8`}
        >
          <button
            type="button"
            className={`-m-2.5 p-2.5 text-light-smallHeader dark:text-dark-smallHeader lg:hidden`}
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="flex flex-1 items-center">
            <h1 className="text-primary pageHeading font-bold  text-light-textHeader dark:text-dark-textHeader text-lg tracking-wide	 ">
              {pageTitle}{' '}
            </h1>
          </div>
        </div>
        <main className="py-10 h-screen">
          <div className="px-4 sm:px-6 lg:px-8 font-custom">
            <div className={inconsolata.className}>{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
