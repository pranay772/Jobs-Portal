/* eslint-disable react/prop-types */
const Hero = ({
  title = 'Get your dream job!',
  backgroundImageUrl = 'https://images.unsplash.com/photo-1616624446421-b6a136da737d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Provide the URL of your background image
}) => {
  return (
    <section className='bg-cover bg-center py-20 mb-4' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl' style={{ textShadow: '6px 6px 8px rgba(0,0,0,1)' }}>
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Hero;
