import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>For Job Seekers</h2>
            <p className='mt-2 mb-4'>
              Discover our jobs list and kickstart your career today!
            </p>
            <Link
              to='/jobs'
              className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-5 w-500 focus:outline-none focus:shadow-outline'
            >
              Find Jobs
            </Link>
          </Card>
          <Card bg='bg-blue-100'>
            <h2 className='text-2xl font-bold'>For Employers</h2>
            <p className='mt-2 mb-4'>
              List your job here to find a perfect-fit employee for your org.
            </p>
            <Link
              to='/add-job'
              className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-5 w-500 focus:outline-none focus:shadow-outline'
            >
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
