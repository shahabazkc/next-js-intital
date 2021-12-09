import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>this is home page guys</title>
        <meta name="keywords" content="web development, programmi"></meta>
      </Head>
      <span>hello world</span>
      <div>
        <ul>
          <li><a href="/contact">Go to Contact page</a></li>
          <li><a href="/about">Go to About page</a></li>
          <li><a href="/">Go to Home page</a></li>
        </ul>
      </div>
    </div>
    
  )
}
