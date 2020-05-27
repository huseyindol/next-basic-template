/**
 *
 * Book
 *
 */

import Head from 'next/head';
// import { useRouter } from 'next/router';
// import Component from '../src/components/Component';

export default function Book(props) {
  // const router = useRouter();

  //console.log('book', props, router);
  return (
    <div className="book-container">
      <Head>
        <title>Book Page</title>
      </Head>
      <main>Book Page Main</main>
    </div>
  );
}
