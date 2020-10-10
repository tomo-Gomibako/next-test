import Head from 'next/head'
import styles from '../styles/CounterPage.module.css'

import Counter from '../components/Counter'

const CounterPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Counter</title>
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className={styles.main}>
        <Counter />
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}

export default CounterPage
