import Head from 'next/head'
import styles from '../styles/ToDoPage.module.css'

import ToDoList from '../components/ToDoList'

const ToDoPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo</title>
        <link href='/favicon.ico' rel='icon' />
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

export default ToDoPage
