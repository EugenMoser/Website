import Navigation from './nav';

interface SidebarProps {}

function Sidebar({}: SidebarProps): JSX.Element {
  return (
    <div className='col-span-1 border-solid'>
      <h1>Eugen Moser</h1>

      <Navigation />
    </div>
  );
}

export default Sidebar;
