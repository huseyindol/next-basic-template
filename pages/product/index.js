/**
 *
 * Product
 *
 */

import Head from 'next/head';
// import { useRouter } from 'next/router';
// import Component from '../src/components/Component';

export default function Product(props) {
  // const router = useRouter();

  //console.log('product', props, router);
  return (
    <div className="product-container">
      <Head>
        <title>Product Page</title>
      </Head>
      <main>Product Page Main</main>
    </div>
  );
}
