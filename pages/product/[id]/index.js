/**
 *
 * Product
 *
 */

import Head from 'next/head';
import { useRouter } from 'next/router';
// import Component from '../src/components/Component';

export default function Product(props) {
  const router = useRouter();
  const { id } = router.query;

  // console.log('product[slug]', props, router);
  return (
    <div className="product-container">
      <Head>
        <title>Product / {id} Page</title>
      </Head>
      <main>Product / {id} Page Main</main>
    </div>
  );
}
