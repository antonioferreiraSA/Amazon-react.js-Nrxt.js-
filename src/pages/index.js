import Banner from "../components/Banner";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header/>
      <main className="max-w-2xl mx-auto">
        {/* banner */}
        <Banner/>
        {/* prodcut feed */}
      </main>
    </div>
  );
}
