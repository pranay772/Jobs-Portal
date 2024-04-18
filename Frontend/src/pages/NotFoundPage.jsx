import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='text-center flex flex-col justify-center items-center h-96'>
      <FaExclamationTriangle className='text-yellow-400 text-9xl mb-4' />
      <h1 className='text-6xl font-bold mb-3'>404 Not Found</h1>
      <p className='text-xl mb-3'>This page does not exist!</p>
      <Link
        to='/'
        className='text-white bg-blue-700 hover:bg-blue-500 rounded-md px-3 py-2 mt-4'
      >
        Go Back
      </Link>
    </section>
  );
};
export default NotFoundPage;
