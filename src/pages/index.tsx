import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/containers/Container";
import MainContainer from "../components/containers/MainContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spot Map</title>
      </Head>
      <MainContainer>
        <Container>
          <div className="flex w-full h-full justify-center flex-col gap-3">
            <h1 className="text-7xl font-extrabold text-center">Spot Map</h1>
            <h2 className="text-xl text-center">
              Find best spots for your next film scenes or photos.
            </h2>
          </div>
        </Container>
      </MainContainer>
    </>
  );
};

export default Home;
