import React from 'react'
import axios from 'axios';
import { API_URL } from '../../../config';
import Header from '../../components/Header';
import IEpisodeResponse from '../../interfaces/remote/IEpisodeResponse';
import Hero from '../../components/Hero';
import { GetServerSideProps } from 'next';
import ShowInfo from '../../components/ShowInfo';
import styled from 'styled-components';
import breakpoint from '../../styles/breakpoints'
interface IPageProps{
  data?: IEpisodeResponse,
  notFound?: Boolean,
}


const Container = styled.section`
  position: absolute;
  top: 200px;
  left: 15%;
  @media only screen and ${breakpoint.device.sm}{
    top: 100px;
    left: 0;

  }
`
const Episode: React.FC<IPageProps> = ({notFound , data}:IPageProps) => {
  return (
    <div>
      <Header>
        <h1>TV Bland</h1>
      </Header>
      <main>
        {!notFound && (
          <Container>
            <Hero data={data} />
            <ShowInfo data={data}/>
          </Container>
        )}
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async (context) => {
  const {params} = context
  try {
    const { data } = await axios.get<IEpisodeResponse>(
        `${API_URL}shows/${params.id}?embed=cast`
      );
    if (!data) {
      return {
        props: { notFound: true },
      };
    }
    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { notFound: true },
    };
  }
};

export default Episode
