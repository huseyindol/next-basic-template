import Head from 'next/head';
import SignIn from '../../src/components/Auth/SignIn';

export default function Auth() {
  return (
    <div className="container">
      <Head>
        <title>Authentication</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignIn></SignIn>
      </main>
    </div>
  );
}
