'use client';
import {
  useEffect,
  useState,
} from 'react';

import { log } from 'console';
import Link from 'next/link';

interface NavigationProps {}

function Navigation({}: NavigationProps): JSX.Element {
  const links = [
    {
      href: '#about',
      label: 'About',
    },
    {
      href: '#resume',
      label: 'Resume',
    },
    {
      href: '#contact',
      label: 'Contact',
    },
  ];
  const [activeSection, setActiveSection] = useState<string>(
    links[0].href.slice(1)
  );

  //get the current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPosition =
        window.scrollY + (window.innerHeight - window.innerHeight + 1);
      console.log(
        'scrollPosition',
        window.scrollY,
        window.innerHeight - window.innerHeight + 1
      );
      sections.forEach((section) => {
        if (section) {
          const element = section as HTMLElement;
          if (
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.clientHeight > scrollPosition
          ) {
            setActiveSection(element.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <ul className='flex flex-col gap-2 justify-end'>
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={` 
              block px-4 py-2 rounded-md ${
                activeSection === link.href.slice(1)
                  ? // ? 'bg-gray-300 text-gray-800 animate-shake animate-once animate-duration-1000 animate-ease-linear'
                    'bg-blue-400 slide-right'
                  : 'text-gray-400 hover:bg-gray-200 '
              }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
