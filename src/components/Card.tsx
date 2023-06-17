import React from 'react';
import { Badge } from './ui/Badge';
import { Star } from '@phosphor-icons/react';

interface ICard {
  superHost: boolean;
  title: string;
  rating: number;
  type: string;
  beds: number | null;
  photo: string;
}

const Card: React.FC<ICard> = ({
  superHost,
  title,
  rating,
  type,
  beds,
  photo,
}) => {
  return (
    <div className=" w-96 max-md:w-80">
      <img
        src={photo}
        alt={title}
        className="rounded-3xl mb-3 h-56  w-96 object-cover max-md:w-80 max-md:h-52"
      />
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-1 items-center">
          {superHost && (
            <Badge
              variant={'outline'}
              className="text-xs max-md:text-[10px] uppercase font-bold leading-3 text-[#4F4F4F] border-[1px] border-[#4F4F4F] rounded-[9px] px-2 py-1"
            >
              Super host
            </Badge>
          )}

          <p className=" text-sm max-md:text-xs text-[#828282] font-medium">
            {type}
            {beds && ` . ${beds} beds`}
          </p>
        </div>
        <div className="flex gap-1 items-center text-sm max-md:text-xs text-[#4F4F4F] font-medium">
          <Star size={18} color="#EB5757" weight="fill" /> {rating}
        </div>
      </div>
      <p className="font-semibold text-[#333333] text-base max-md:text-sm">
        {title}
      </p>
    </div>
  );
};

export default Card;
