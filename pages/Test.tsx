import React from 'react';
import Tests from '../components/Test'
import Navbar from '../components/Navbar'
type Props = {};

const Test = (props: Props) => {

  return (
    <div className='flex flex-col'>
    <Navbar />
    <Tests />
    </div>
  );
};

export default Test;
