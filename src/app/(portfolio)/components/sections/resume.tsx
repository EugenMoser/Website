import '../../../globals.css';

import React from 'react';

import Table from 'react-bootstrap/Table';

import { strings } from '../../utils/strings';

interface Resume {
  period: string;
  position: string;
  company: string;
  details: string[] | [];
}

interface SectionProps {
  title: string;
  items: Resume[];
}

const ResumeSection: React.FC<SectionProps> = ({ title, items }) => {
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
              <p>{item.company}</p>
              <p>{item.details}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

const ResumeTable: React.FC = () => {
  const {
    experience,
    continuingEducation,
    vocationalEducation,
    communityService,
    graduation,
  } = strings.resume;

  return (
    <Table
      responsive
      id='resume'
    >
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
    </Table>
  );
};

export default ResumeTable;
