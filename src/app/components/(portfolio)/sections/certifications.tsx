import Image from 'next/image';
import Link from 'next/link';

import { strings } from '../../../language/(portfolio)/de';

type CertificationsStringProps = {
  name: string;
  link: string;
};
function Certifications(): JSX.Element {
  return (
    <section
      id='certifications'
      className={`sectionStyle`}
    >
      <h1 className='pb-4'>Certifications</h1>
      <ul>
        {strings.certifications.map(
          (certification: CertificationsStringProps, index: number) => (
            <li
              key={index}
              className='hover:text-blue flex items-center space-x-3 pb-2'
            >
              <Image
                src='/icons/certificate-50.png'
                alt='Certification Icon'
                width={24}
                height={24}
              ></Image>
              <Link
                href={certification.link}
                target='_blank'
              >
                {certification.name}
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default Certifications;
