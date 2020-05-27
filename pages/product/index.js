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

  // console.log('product', props);
  return (
    <div className="product-container">
      <Head>
        <title>Product Page</title>
      </Head>
      <main>Product Page Main</main>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log('data', params);
  return {
    props: { ...params },
  };
}
