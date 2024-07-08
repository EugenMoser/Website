import { strings } from '../../language/de';

interface AboutProps {
  active: boolean;
}

function About({ active }: AboutProps): JSX.Element {
  return (
    <section
      id='about'
      className={`sectionStyle ${active && 'fadeInUp'}`}
    >
      <h1 className='pb-4'>{strings.aboutMeHeader}</h1>
      <p>{strings.aboutMeTest}</p>
    </section>
  );
}

export default About;
