import React from 'react';
import Image from 'next/image'
import IScheduleResponse from '../../interfaces/remote/IScheduleResponse';
import ShowCard from '../ShowCard';
import * as S from './styled'

interface IShowListProps {
  data: IScheduleResponse
}
const filterData = (data:IScheduleResponse) : IScheduleResponse => {
  return data.filter(item => {
    if (item.show.image.medium === null || item.show.rating.average === null) {
      return false
    }
    return true
})
}
const ShowsList:React.FC<IShowListProps> = ({data}: IShowListProps) => {
  return (
    <S.SectionContainer>
      <h2>Latest Added Shows</h2>
      <S.ListContainer>
          {filterData(data).map((data) => (
            <ShowCard data={data} />
            ))}
      </S.ListContainer>
  </S.SectionContainer>

  );
}

export default ShowsList;
