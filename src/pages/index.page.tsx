import React from 'react'
import { GetServerSideProps } from 'next';
import axios from 'axios';
import styled from 'styled-components';
import IScheduleResponse from '../interfaces/remote/IScheduleResponse';
import ShowsList from '../components/ShowsList';
import { API_URL } from '../../config';
import Header from '../components/Header';
import breakpoint from '../styles/breakpoints'
interface IPageProps{
  data?: IScheduleResponse,
  notFound?: Boolean,
}

const Container = styled.section`
  position: absolute;
  top: 300px;
  @media only screen and ${breakpoint.device.sm}{
    top: 150px;
  }
`
const Home: React.FC<IPageProps> = ({
  data,
  notFound,
}: IPageProps) => {
  return (
    <div>
      <Header>
        <h1>TV Bland</h1>
        <p>TV Shows and web series database.</p>
      </Header>
      <main>
        <Container>
          {!notFound ? <ShowsList data={data}/> : <div>Something went wrong, please try again</div>}
        </Container>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  try {
    const { data } = await axios.get<IScheduleResponse>(
      `${API_URL}schedule?country=US&date=2021-08-23`
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

export default Home
