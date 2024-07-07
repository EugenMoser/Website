import Image from 'next/image';

import Navigation from './navigation';

interface SidebarProps {}

function Sidebar({}: SidebarProps): JSX.Element {
  return (
    <div className='mr-8 '>
      <Image
        src='/images/Bild_Moser.png'
        alt='image from Eugen'
        width={200}
        height={200}
      />
      <div className='flex '>
        <h1 className='mb-8 w-screen'>Eugen Moser</h1>
      </div>
      <Navigation />
    </div>
  );
}

export default Sidebar;
