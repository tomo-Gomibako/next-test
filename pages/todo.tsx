import Head from 'next/head'
import styles from '../styles/ToDo.module.css'

import ToDoList from '../components/ToDoList'

export default function ToDo () {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <ToDoList />
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}
