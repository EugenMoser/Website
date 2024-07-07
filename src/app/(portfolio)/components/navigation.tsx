'use client';
import '../../globals.css';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { handleScroll, sections } from '../utils/scrollTracker';

interface NavigationProps {}

function Navigation({}: NavigationProps): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | void>(
    'about'
  );

  //get the current section based on scroll position
  useEffect(() => {
    const onScroll = () => {
      const currentSection = handleScroll();
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', onScroll, false);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [activeSection]);

  return (
    <ul className='flex flex-col justify-end'>
      {sections.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={` 
              block  px-4 py-2 rounded-md  ${
                activeSection === link.href.slice(1)
                  ? 'bg-linkblue slide-right'
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
