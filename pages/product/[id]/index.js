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

  console.log('product[slug]', props);
  return (
    <div className="product-container">
      <Head>
        <title>Product / {id} Page</title>
      </Head>
      <main>Product / {id} Page Main</main>
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
  let data = null;
  if (params === '1') {
    data = { ...params, name: 'huseyin', surname: 'dol' };
  } else {
    data = { ...params, name: 'hasan', surname: 'dol' };
  }
  return {
    props: { data },
  };
}
