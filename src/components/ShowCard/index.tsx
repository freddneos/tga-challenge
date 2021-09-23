import React from 'react';
import Image from 'next/image'
import { IScheduleItem } from '../../interfaces/remote/IScheduleResponse';


interface IShowCardProps {
  data: IScheduleItem
}
const ShowCard:React.FC<IShowCardProps> = ({data}:IShowCardProps) => {
  const {id,name,season,show} = data
  return (
    <>
      <ul>
            <li key={id as number}>
              <Image src={show.image.medium as string} width={200} height={350}/>
              <h2>{name}</h2>
              <span>Season: {season}</span>
            </li>
        </ul>
    </>
  );
}

export default ShowCard
