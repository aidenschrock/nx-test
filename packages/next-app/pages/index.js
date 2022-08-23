import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      The value of my variable is <b>{process.env.NEXT_PUBLIC_ENV_SPECIFIC_URL }</b>
     </div> 
  )
}