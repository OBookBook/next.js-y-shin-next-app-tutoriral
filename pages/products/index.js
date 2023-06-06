import Link from 'next/link'
import styles from '@/styles/Home.module.css'
// http://localhost:3000/products
export default function ProductsList() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>
        <ul>
          <li>
            <Link href="/products/smartphone" legacyBehavior>
              <a>スマートフォン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/pc" legacyBehavior>
              <a>パソコン</a>
            </Link>
          </li>
          <li>
            <Link href="/products/headph" legacyBehavior>
              <a>ヘッドフォン</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
