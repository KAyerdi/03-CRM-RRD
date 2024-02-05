import React from 'react';

const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/4 bg-blue-800 px-5 py-10'></div>
      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>

      </main>
    </div>
  );
};

export default Layout