import Head from 'next/head';
import Counter from '../src/components/Counter';

export default function Home(props) {
  // console.log('home', props);
  return (
    <div className="home-container">
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <Counter></Counter>
      </main>
    </div>
  );
}
