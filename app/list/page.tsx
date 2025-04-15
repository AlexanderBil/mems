import React from 'react';
import { MemesType } from '../types/types';
import CardList from '../components/cardList/CardList';

async function getListMemes(): Promise<MemesType[]> {
  const res = await fetch('http://localhost:3000/api/memes');
  const result = await res.json();
  return result;
}

const List = async () => {
  const memes = await getListMemes();

  return (
    <div className="h-screen flex flex-col items-center gap-5 ">
      <CardList memes={memes} />
    </div>
  );
};

export default List;
