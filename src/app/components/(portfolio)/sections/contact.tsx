import Image from 'next/image';
import Link from 'next/link';

function Contact(): JSX.Element {
  return (
    <section
      id='contact'
      className={`sectionStyle `}
    >
      <h1 className='pb-4'>Contact</h1>
      <Link
        href={'https://www.linkedin.com/in/eugen-moser'}
        target={'_blank'}
      >
        <Image
          src={'/icons/linkedin.png'}
          alt='Picture of the author'
          width={48}
          height={48}
        />
      </Link>
    </section>
  );
}

export default Contact;
