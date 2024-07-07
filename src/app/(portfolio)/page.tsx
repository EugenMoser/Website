import About from './components/sections/about';
import Certifications from './components/sections/certifications';
import Contact from './components/sections/contact';
import Education from './components/sections/education';
import Resume from './components/sections/resume';

export default function Home() {
  return (
    <div className='flex flex-col '>
      <About />
      <Resume />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

//todo: - responsive Design
//todo: - scroll animation
//todo:   - section arise
//todo:   - section station when scroll

//todo: - progress bar
//todo: - multilanguage
//todo:
//todo:
