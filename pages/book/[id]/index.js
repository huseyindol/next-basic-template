/**
 *
 * Book
 *
 */

import Head from 'next/head';
import { useRouter } from 'next/router';
// import Component from '../src/components/Component';

export default function Book(props) {
  const router = useRouter();
  const { id } = router.query;
  //console.log('book', props, router);
  return (
    <div className="book-container">
      <Head>
        <title>Book / {id} Page</title>
      </Head>
      <main>Book / {id} Page Main</main>
    </div>
  );
}
