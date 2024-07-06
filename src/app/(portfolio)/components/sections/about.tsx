import { strings } from '../../utils/strings';

interface AboutProps {}

function About({}: AboutProps): JSX.Element {
  return (
    <div
      id='about'
      className='col-span-1 sm:col-span-1 pb-20'
    >
      <h1 className='pb-4'>About me</h1>
      <p>{strings.aboutMe}</p>
    </div>
  );
}

export default About;
