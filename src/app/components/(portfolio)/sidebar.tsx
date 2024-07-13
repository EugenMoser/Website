import Image from 'next/image';

import Navigation from './navigation';

interface SidebarProps {}

function Sidebar({}: SidebarProps): JSX.Element {
  return (
    <div className=' flex flex-col justify-center sticky top-0 h-screen'>
      <Image
        className='self-center'
        src='/images/Bild_Moser.png'
        alt='image from Eugen'
        width={200}
        height={200}
      />
      <h1 className='self-center mt-4 mb-8 '>Eugen Moser</h1>
      <Navigation />
    </div>
  );
}

export default Sidebar;
