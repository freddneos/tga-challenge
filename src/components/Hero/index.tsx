import React from 'react';
import ReactStars from "react-rating-stars-component";

import IEpisodeResponse from '../../interfaces/remote/IEpisodeResponse';
import * as S from './styled'

interface IHeroProps {
  data:IEpisodeResponse
}
const Hero: React.FC<IHeroProps> = ({ data }: IHeroProps) => {
  const { image, rating, name, summary } = data
  const ratingAvg = (parseInt(rating.average as string))/2
  return (
    <S.HeroContainer>
      <S.CardContainer>
        <S.ImageContainer
          src={image.original as string}
          height={300} width={250}
          placeholder="blur"
          blurDataURL={"https://via.placeholder.com/280x250"}
        />
      </S.CardContainer>
      <S.InfoContainer>
        <S.StarsContainer>
          <ReactStars
              edit={false}
              isHalf={true}
              count={5}
              value={ratingAvg}
              size={24}
              activeColor={'#8257e6'}
          />
          <b>{ratingAvg}/5</b>
      </S.StarsContainer>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{__html: summary as string}}></div>
      </S.InfoContainer>
    </S.HeroContainer>
  );
}

export default Hero;
