import React from "react";
import {Card as CardHeroui, CardHeader, CardBody, Image} from "@heroui/react";
import { MemesType } from "../../types/types";

const Card = ({meme}: {meme: MemesType}) => {
  return <div>
    <CardHeroui className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Title: {meme.name}</p>
        <small className="text-default-500">Likes: {meme.likes}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl  "
          src={meme.img}
          width={200}
          height={200}
        />
      </CardBody>
    </CardHeroui>
  </div>;
};

export default Card;
