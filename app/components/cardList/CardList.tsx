'use client';

import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import { MemesType } from '../../types/types';

const CardList = ({ memes }: { memes: MemesType[] }) => {
  const [memesData, setMemesData] = useState<MemesType[]>([]);

    useEffect(() => {
      if (localStorage.getItem('memes') === null) {
        setMemesData(memes)
       }
      const savedMemes = localStorage.getItem("memes");
      savedMemes && setMemesData(JSON.parse(savedMemes))
    }, []);
  
      if(!memesData.length){
        return <p className='font-bold text-amber-50' >Loading Data...</p>
      }
    

  return (
    <div className="grid grid-cols-4 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 wide:grid-cols-4 gap-4">
      {memesData.map((meme) => (
        <Card key={meme.id} meme={meme} />
      ))}
    </div>
  );
};

export default CardList;
