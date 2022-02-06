import React from 'react';
import { useSelector } from 'react-redux';
import NavBar from '../components/Navbar';
import { RootState } from '../store';

const Profile = () => {
    const user = useSelector((state: RootState) => state.user.value)


  return (
    <div>
        <NavBar />
    </div>
  );
};

export default Profile;
