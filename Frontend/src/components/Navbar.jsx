import { useState, useEffect } from 'react'; 
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2'
      : 'text-white hover:bg-blue-800 hover:text-white rounded-md px-3 py-2';

  const navbarClass = isSticky
    ? 'bg-gray-900 border-b border-gray-700 fixed top-0 left-0 right-0 z-50'
    : 'bg-gray-900 border-b border-gray-700';

  return (
    <nav className={navbarClass}> 
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <NavLink className='flex items-center' to='/'>
              <img className='h-8 w-15' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-lg font-bold ml-2'>
                Jobs Portal
              </span>
            </NavLink>
          </div>
          <div className='md:flex'>
            <NavLink to='/jobs' className={linkClass}>
              Jobs
            </NavLink>
            <NavLink to='/add-job' className={linkClass}>
              Add Job
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
