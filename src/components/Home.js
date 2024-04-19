import React from 'react';
import Feed from './Feeds/Feed';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from './rightSidebar/RightSidebar';

const Home = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto mt-6">
      <LeftSidebar />
      <Feed />
      
      <RightSidebar />
    </div>
  );
};

export default Home;
