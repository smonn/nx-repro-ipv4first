import styles from './page.module.css';

export default async function Index() {
  const url = new URL('/api', process.env.API_URL)
  const response = await fetch(url)
  const data = await response.json()
  return (
    <div className={styles.page}>
      <h1>{data.message}</h1>
    </div>
  );
}
