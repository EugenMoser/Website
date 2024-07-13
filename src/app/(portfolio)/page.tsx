'use client';

import About from '../components/(portfolio)/sections/about';
import Certifications from '../components/(portfolio)/sections/certifications';
import Contact from '../components/(portfolio)/sections/contact';
import Education from '../components/(portfolio)/sections/education';
import Resume from '../components/(portfolio)/sections/resume';

export default function Home() {
  return (
    <div className='scrollContainer'>
      <About />

      <Resume />

      <Education />

      <Certifications />

      <Contact />
    </div>
  );
}
