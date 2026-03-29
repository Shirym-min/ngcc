# NGCC Homepage Base

Next.js 15 App Router + TypeScript 5 + React 19 を前提にしたホームページ用のベース構成です。

## Stack

- Next.js 15 / React 19 / TypeScript 5
- CSS Modules
- Vercel Postgres (Neon)
- bcryptjs を使ったセッションベース認証
- Docker / Nginx
- GitHub Actions

## Setup

1. `.env.example` を元に `.env.local` を作成します。
2. `lib/schema.sql` を Postgres に適用します。
3. `users` テーブルへ管理者ユーザーを追加し、`password_hash` には bcrypt ハッシュを保存します。
4. `npm install` を実行します。
5. `npm run dev` で起動します。

## Notes

- 認証は `sessions` テーブルを使う DB セッション方式です。
- `middleware.ts` が `/dashboard` 配下を保護します。
- Vercel にデプロイする場合は `POSTGRES_URL` と `SESSION_SECRET` を環境変数へ設定してください。
