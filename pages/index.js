import Head from 'next/head';
import Counter from '../src/components/Counter';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next sApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Counter></Counter>
      </main>
    </div>
  );
}
