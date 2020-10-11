import Head from 'next/head'
import Link from 'next/link'

import Default from '@/layouts/default'

import styles from '@/styles/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className={styles.main}>
        <Default>
          <div>
            <Link href='/counter'>counter &gt;</Link>
          </div>
          <div>
            <Link href='/todo'>todo &gt;</Link>
          </div>
        </Default>
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}

export default HomePage
