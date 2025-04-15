import React from 'react';
import CardList from '../components/cardList/CardList';

import { memesData } from '../fakeData/fakeData';

const List = async () => {
  return (
    <div className="h-screen flex flex-col items-center gap-5 ">
      <CardList memes={memesData} />
    </div>
  );
};

export default List;
