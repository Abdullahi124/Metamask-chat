import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

export default function Home() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    <div className="">
      <Head>
        <title>Metaverse Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3>The home page</h3>
      <button onClick={logout}>Log out</button>
    </div>
  )
}
