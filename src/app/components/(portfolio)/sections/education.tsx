import Image from 'next/image';
import Link from 'next/link';

import { strings } from '../../../language/(portfolio)/de';

type EducationStringProps = {
  name: string;
  link: string;
};

function Education(): JSX.Element {
  return (
    <section
      id='education'
      className={`sectionStyle `}
    >
      <h1 className='pb-4'> Education</h1>
      <ul>
        {strings.education.map(
          (education: EducationStringProps, index: number) => (
            <li
              key={index}
              className='hover:text-blue flex items-center space-x-3 pb-2'
            >
              <Image
                src='/icons/education-48.png'
                alt='Education Icon'
                width={24}
                height={24}
              ></Image>{' '}
              <Link
                href={education.link}
                target='_blank'
              >
                {education.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default Education;
