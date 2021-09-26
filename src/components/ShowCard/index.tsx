import React from 'react';
import { IScheduleItem } from '../../interfaces/remote/IScheduleResponse';
import ReactStars from "react-rating-stars-component";
import Link from 'next/link'

import * as S from './styled'

interface IShowCardProps {
  data: IScheduleItem
}
const ShowCard: React.FC<IShowCardProps> = ({ data }: IShowCardProps) => {
  const { id, name, show } = data
  return (
    <S.CardContainer key={id as number}>
      <Link href={`show/${show.id}`}>
        <S.ImageContainer src={show.image.medium as string} width={150} height={250} placeholder="blur" blurDataURL={"https://via.placeholder.com/150x250"} />
       </Link>
        <S.InfoContainer>
        <ReactStars
          edit={false}
          isHalf={true}
          count={5}
          value={(show.rating.average as number)/2}
          size={14}
          activeColor={'#8257e6'}
          />
          <h3>{show.name}</h3>
        </S.InfoContainer>
    </S.CardContainer>
  );
}

export default ShowCard
