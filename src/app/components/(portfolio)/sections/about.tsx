import {
  useEffect,
  useRef,
} from 'react';

import gsap from 'gsap';

import { strings } from '../../../language/(portfolio)/de';

function About(): JSX.Element {
  const headlineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          scroller: '.container',
          trigger: headlineRef.current,
          start: 'top 60%',
          end: 'bottom 0%',
          toggleActions: 'play none restart reverse',
        },
      }
    );
    return () => {};
  }, []);

  return (
    <section
      ref={sectionRef}
      id='about'
      className={`sectionStyle `}
    >
      <h1
        ref={headlineRef}
        className='pb-4'
      >
        {strings.aboutMeHeader}
      </h1>
      <p>{strings.aboutMeTest}</p>
    </section>
  );
}

export default About;
