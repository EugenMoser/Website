'use client';
import '../../globals.css';

import {
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';

import { SECTIONS as sections } from '../../constants/(portfolio)/constants';
import { handleScroll } from '../../utils/(portfolio)/scrollTracker';

function Navigation(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | void>(
    'about'
  );

  //get the current section based on scroll position
  useEffect(() => {
    const onScroll = () => {
      const currentSection = handleScroll();
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', onScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [activeSection]);
  return (
    <ul className='flex flex-col justify-end'>
      {sections.map((link) => (
        <li
          key={link.href}
          className={'w-4/5'}
        >
          <Link
            href={link.href}
            className={` 
              block  px-4 py-2 rounded-md  ${
                activeSection === link.href.slice(1)
                  ? 'bg-blue slide-right'
                  : 'text-gray-400 hover:text-blue '
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
