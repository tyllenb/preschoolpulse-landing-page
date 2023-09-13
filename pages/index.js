import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Preschool Pulse</title>
        <meta name="description" content="Bringing insights to create actionable positive change to your pre-schools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout />
      <Footer />
    </>
  );
}
