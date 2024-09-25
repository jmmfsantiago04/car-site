"use client"
import Head from 'next/head';
import CustomBanner from '@/components/Section1';
import Form from '@/components/Section2';
import CardComponent from '@/components/Section5';
import Section6 from '@/components/Section6';
import Section3 from '@/components/Section3';


const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <CustomBanner />
      <Form />  
      <CardComponent />
      <Section6 />
      <Section3 />
    </>
  );
};

export default Home;
