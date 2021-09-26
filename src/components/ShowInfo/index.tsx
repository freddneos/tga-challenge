import React from 'react';
import Image from 'next/image'
import * as S from './styled'
import IEpisodeResponse from '../../interfaces/remote/IEpisodeResponse';

interface IShowInfoProps {
  data:IEpisodeResponse
}
const ShowInfo: React.FC<IShowInfoProps> = ({ data }: IShowInfoProps) => {
  return (
    <S.Container >
      <S.ShowInfoContainer>
        <h2>Show Info</h2>
        <ul>
          <li><b>Streamed on</b> {data.network?.name || 'Not avaiable' } </li>
          <li><b>Schedule</b> {data.schedule.days.length > 0 ?data.schedule.days.map(item=>`${item}, `) : 'Not avaiable'}</li>
          <li><b>Status</b> {data.status || 'Not avaiable' }</li>
          <li><b>Genres</b> {data.genres.length > 0 ? data.genres.map(item=>`${item}, `) : 'Not avaiable'}</li>
        </ul>
      </S.ShowInfoContainer>
      <S.ShowInfoContainer>
        <h2>Starring</h2>
        <ul>
          {data._embedded?.cast.length > 0 ? data._embedded.cast.map(cast => {
          return (
            <li>
              <S.ImageStyled
                src={cast.person.image?.original as string || "https://via.placeholder.com/40x40"}
                height={50} width={50} placeholder="blur"
                blurDataURL={"https://via.placeholder.com/40x40"}
              />

              <b>{cast.person.name.trim()}</b> <p>{cast.character.name}</p>
            </li>
          )
        }): <h3>not avaiable</h3>}
      </ul>
      </S.ShowInfoContainer>
    </S.Container>
  );
}

export default ShowInfo
