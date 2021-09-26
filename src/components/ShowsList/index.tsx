import React from 'react';
import Image from 'next/image'
import IScheduleResponse from '../../interfaces/remote/IScheduleResponse';
import ShowCard from '../ShowCard';
import * as S from './styled'

interface IShowListProps {
  data: IScheduleResponse
  isLoading: boolean
  children:any
}
const filterData = (data:IScheduleResponse) : IScheduleResponse => {
  return data.filter(item => {
    if (item.show.image.medium === null || item.show.rating.average === null) {
      return false
    }
    return true
})
}
const ShowsList:React.FC<IShowListProps> = ({data , isLoading, children}: IShowListProps) => {
  return (
    <S.SectionContainer>
      <h2>Latest Added Shows</h2>
      <div>
      {children}
      </div>
      {
        !isLoading ? ( <S.ListContainer>
          {filterData(data).map((data) => (
            <ShowCard data={data} key={data.id} />
            ))}
        </S.ListContainer>) :
          <h2>Loading...</h2>
      }

  </S.SectionContainer>

  );
}

export default ShowsList;
