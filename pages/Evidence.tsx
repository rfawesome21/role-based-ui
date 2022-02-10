import React from 'react';
import EvidenceBank from '../components/EvidenceBank';
import NavBar from '../components/Navbar';

type Props = {};

const Evidence = (props: Props) => {
  return (
      <div>
          <NavBar />
          <EvidenceBank />
      </div>
  );
};

export default Evidence;
