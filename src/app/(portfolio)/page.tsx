'use client';

import {
  useEffect,
  useState,
} from 'react';

import About from './components/sections/about';
import Certifications from './components/sections/certifications';
import Contact from './components/sections/contact';
import Education from './components/sections/education';
import Resume from './components/sections/resume';
import { handleScroll } from './utils/scrollTracker';

export default function Home() {
  // use set to avoid duplicates
  const [activeSections, setActiveSections] = useState(new Set(['about']));

  //get the current section based on scroll position
  useEffect(() => {
    const onScroll = () => {
      const currentSection = handleScroll();
      setActiveSections((prevSections) => {
        const newSections = new Set(prevSections);
        newSections.add(currentSection);
        return newSections;
      });
    };

    window.addEventListener('scroll', onScroll);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  console.log('Position', window.scrollY);

  return (
    <div className='flex flex-col '>
      <About active={activeSections.has('about')} />
      <Resume active={activeSections.has('resume')} />
      <Education active={activeSections.has('education')} />
      <Certifications active={activeSections.has('certifications')} />
      <Contact active={activeSections.has('contact')} />
    </div>
  );
}

//todo: - scroll animation
//todo:   - section arise
//todo:   - section station when scroll

//todo: - progress bar
//todo: - multilanguage

//todo: - responsive Design

//todo:
//todo:
