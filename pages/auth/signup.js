import Head from "next/head";
import SignUpF from "../../src/features/Auth/SignUp";

export default function SignUp() {
  return (
    <div className="container">
      <Head>
        <title>SignUp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SignUpF></SignUpF>
      </main>
    </div>
  );
}
