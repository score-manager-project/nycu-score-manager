import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Score Manager</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-6xl text-slate-900">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-500 to-blue-500">
            Score Manager
          </span>
        </h1>
        <p className="text-xl text-slate-700">Manage your scores with ease</p>
      </div>
    </>
  );
};

export default Home;
