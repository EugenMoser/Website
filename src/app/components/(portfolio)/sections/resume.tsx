import '../../../globals.css';

import React, {
  useEffect,
  useRef,
} from 'react';

import gsap from 'gsap';

import { strings } from '../../../language/(portfolio)/de';

interface ResumeProps {
  period: string;
  position: string;
  company: string;
  details: string[] | [];
}

interface SectionProps {
  title: string;
  items: ResumeProps[];
}

function ResumeSection({ title, items }: SectionProps): JSX.Element {
  return (
    <>
      <thead>
        <tr>
          <th className=' flex self-start mb-6'>
            <h2>{title}</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={index}
            className='flex flex-col mb-6 md:flex-row'
          >
            <td className='text-grey md:flexSmall'>{item.period}</td>
            <td className='md:flexBig flex flex-col'>
              <p className='text-xl font-bold mb-2'>{item.position}</p>
              <p className='mb-2'>{item.company}</p>
              <ul>
                {item.details.length > 0 && (
                  <>
                    {item.details.map((detail: string, index: number) => (
                      <li
                        key={index}
                        className='list list-line-feed'
                      >
                        {detail}
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

function ResumeTable(): JSX.Element {
  const {
    experience,
    continuingEducation,
    vocationalEducation,
    communityService,
    graduation,
  } = strings.resume;
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
      id='resume'
      className={`sectionStyle `}
    >
      <h1
        ref={headlineRef}
        className='pb-4'
      >
        Resume
      </h1>
      <table className='pb-20'>
        <ResumeSection
          title='Praktische Erfahrung'
          items={experience}
        />
        <ResumeSection
          title='Weiterbildung'
          items={continuingEducation}
        />
        <ResumeSection
          title='Berufsausbildung'
          items={vocationalEducation}
        />
        <ResumeSection
          title='Zivieldienst'
          items={communityService}
        />
        <ResumeSection
          title='Schulabschluss'
          items={graduation}
        />
      </table>{' '}
    </section>
  );
}

export default ResumeTable;
