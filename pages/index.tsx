import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className={styles.main}>
        <Link href='/counter'>counter &gt;</Link>
        <Link href='/todo'>todo &gt;</Link>
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}

export default HomePage
