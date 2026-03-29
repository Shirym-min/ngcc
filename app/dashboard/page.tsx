import { requireUser } from "@/lib/auth";

import styles from "./page.module.css";

export default async function DashboardPage() {
  const user = await requireUser();

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <div>
          <p className={styles.eyebrow}>Protected Route</p>
          <h1>{user.name} さん、ようこそ</h1>
          <p className={styles.lead}>
            このページはセッションが有効な場合のみ表示されます。CMS、問い合わせ管理、運用ダッシュボードの起点として使えます。
          </p>
        </div>

        <dl className={styles.meta}>
          <div>
            <dt>Email</dt>
            <dd>{user.email}</dd>
          </div>
          <div>
            <dt>User ID</dt>
            <dd>{user.user_id}</dd>
          </div>
        </dl>

        <form method="post" action="/api/auth/logout">
          <button type="submit" className={styles.logout}>
            ログアウト
          </button>
        </form>
      </section>
    </main>
  );
}
