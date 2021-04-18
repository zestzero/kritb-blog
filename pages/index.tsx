import { HomePage } from "components/Pages/Home/HomePage";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <HomePage isSSR={false} isStatic={false} />
    </>
  );
};

export default Home;
