import Image from 'next/image';
import Link from 'next/link';

import { strings } from '../../utils/strings';

type CertificationsProps = {
  name: string;
  link: string;
};
function Certifications(): JSX.Element {
  return (
    <div
      id='certifications'
      className='sectionStyle'
    >
      <h1 className='pb-4'>Certifications</h1>
      <ul>
        {strings.certifications.map(
          (certification: CertificationsProps, index: number) => (
            <li
              key={index}
              className='hover:text-linkblue flex items-center space-x-3 pb-2'
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
    </div>
  );
}

export default Certifications;
