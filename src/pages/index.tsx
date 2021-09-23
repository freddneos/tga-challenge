import React from 'react'
import { GetServerSideProps } from 'next';
import Image from 'next/image'
import axios from 'axios';
import IScheduleResponse from '../interfaces/remote/IScheduleResponse';
import ShowsList from '../components/ShowsList';

interface IPageProps{
  data?: IScheduleResponse,
  notFound?: Boolean,
}
const Home: React.FC<IPageProps> = ({
  data,
  notFound,
}: IPageProps) => {
  if (notFound) {
    return <div>Something went wrong, please try again</div>;
   }
  return (
    <div>
      <main>
        <ShowsList data={data}/>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  try {
    const { data } = await axios.get<IScheduleResponse>(
      'https://api.tvmaze.com/schedule?country=US&date=2021-08-23'
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
