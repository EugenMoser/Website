import '../../../globals.css';

import React from 'react';

import { strings } from '../../language/de';

interface ResumeProps {
  period: string;
  position: string;
  company: string;
  details: string[] | [];
}
interface ResumeTableProps {
  active: boolean;
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

function ResumeTable({ active }: ResumeTableProps): JSX.Element {
  const {
    experience,
    continuingEducation,
    vocationalEducation,
    communityService,
    graduation,
  } = strings.resume;

  return (
    <section
      id='resume'
      className={`sectionStyle ${active && 'fadeInUp'}`}
    >
      <h1 className='pb-4'>Resume</h1>
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
