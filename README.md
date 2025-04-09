# reric-website

Next.jsを使用した静的Webサイト

## プロジェクト構造

```
reric-website/
├── src/              # アプリケーションのソースコード
│   ├── app/         # Next.jsアプリケーションルート
│   ├── components/  # 再利用可能なコンポーネント
│   ├── lib/        # 外部サービス連携やビジネスロジック
│   ├── styles/     # グローバルスタイルとテーマ
│   ├── types/      # TypeScript型定義
│   └── utils/      # ユーティリティ関数
├── docs/            # プロジェクトドキュメント
│   ├── architecture/ # アーキテクチャ設計文書
│   ├── api/        # API仕様書
│   └── deployment/ # デプロイメントガイド
└── public/         # 静的アセット
```

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 静的ファイルの生成
npm run export
```

## コーディング規約

1. **コンポーネント設計**
   - Atomic Designパターンに従う
   - コンポーネントは`src/components`に配置
   - 各コンポーネントは独自のディレクトリを持つ

2. **型定義**
   - 厳格な型チェックを有効化
   - 共有の型定義は`src/types`に配置
   - コンポーネント固有の型は各コンポーネントディレクトリに配置

3. **スタイリング**
   - TailwindCSSを使用
   - グローバルスタイルは`src/styles`に配置
   - コンポーネント固有のスタイルは各コンポーネントと同じ場所に配置

4. **パフォーマンス**
   - 画像の最適化
   - コンポーネントの適切な分割
   - 不要なレンダリングの防止

## 環境変数

開発時は`.env.local`ファイルを作成し、以下の変数を設定してください：

```env
NEXT_PUBLIC_BASE_PATH=
```

## デプロイメント

デプロイメントの詳細は[デプロイメントガイド](./docs/deployment/README.md)を参照してください。

## ドキュメント

- [アーキテクチャ設計](./docs/architecture/README.md)
- [API仕様書](./docs/api/README.md)
- [デプロイメントガイド](./docs/deployment/README.md)
