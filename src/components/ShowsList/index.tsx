import React from 'react';
import Image from 'next/image'
import IScheduleResponse from '../../interfaces/remote/IScheduleResponse';
import ShowCard from '../ShowCard';

interface IShowListProps {
  data: IScheduleResponse
}
const ShowsList:React.FC<IShowListProps> = ({data}: IShowListProps) => {
  return (
    <div>
         {data.map((data) => (
           <ShowCard data={data} />
          ))}
    </div>
  );
}

export default ShowsList;
