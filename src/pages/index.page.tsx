import React from 'react'
import { GetServerSideProps, GetStaticProps } from 'next';
import axios from 'axios';
import styled from 'styled-components';
import IScheduleResponse from '../interfaces/remote/IScheduleResponse';
import ShowsList from '../components/ShowsList';
import { API_URL } from '../../config';
import Header from '../components/Header';
import breakpoint from '../styles/breakpoints'
import {format , addDays ,subDays, parseISO} from 'date-fns'
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

  const today = format(new Date(), 'yyyy-MM-dd')
  const [dateIndex, setDateIndex] = React.useState(today)
  const [apiData, setApiData] = React.useState(data)
  const [isLoading, setLoading] = React.useState(false)
  const firstUpdate = React.useRef(true);

  const onChangeIndex = (add = false) => {
    let dateToChange = parseISO(dateIndex)
    let newDate = add ? addDays(dateToChange, 1) : subDays(dateToChange, 1)
    setDateIndex(format(newDate, 'yyy-MM-dd'))
  }
  const getData = async () => {
    setLoading(true)
    const { data } = await axios.get<IScheduleResponse>(
      `${API_URL}schedule?country=US&date=${dateIndex}`
    );
    setApiData(data)
    setLoading(false)
  }

  React.useMemo(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    getData()
  }, [dateIndex])

  interface IPaginateProps {
    dateIndex: string
    onChange: (data?:boolean) => void
  }
  const PaginateComponent = ({dateIndex , onChange}:IPaginateProps) => (
    <>
      <button onClick={() => onChange()}> {'<'} </button>
      {dateIndex}
      <button onClick={() => onChange(true)}> {'>'} </button>
    </>
  )

  return (
    <div>
      <Header>
        <h1>TV Bland</h1>
        <p>TV Shows and web series database.</p>
      </Header>
      <main>
        <Container>
       { !notFound ? ( <ShowsList data={apiData} isLoading={isLoading}>
            <PaginateComponent
              dateIndex={dateIndex}
              onChange={onChangeIndex} />
          </ShowsList>): <h2>Some error ocurred , please refresh the page or check your connection.</h2>}
        </Container>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IPageProps> = async () => {
  const apiDate = format(new Date(),"yyyy-MM-dd")
  try {
    const { data } = await axios.get<IScheduleResponse>(
      `${API_URL}schedule?country=US&date=${apiDate}`
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
      revalidate:10000
    };
  }
};

export default Home
