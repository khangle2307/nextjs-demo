import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Home.module.css'

const Home : React.FC = () =>  {
  const router = useRouter();
  const handleClick = () => {
    router.push("/products");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Home page</title>
      </Head>
      <Link href="/users">Users</Link>
      <h1>Home page</h1>
      <button onClick={handleClick}>Order Products</button>
    </div>
  )
}

export default Home;