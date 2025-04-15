# プロジェクトアーキテクチャ概要

## 技術スタック

- Next.js 13.5.11
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## ディレクトリ構造

```
reric-website/
├── docs/
│   ├── architecture/    # アーキテクチャ決定記録（ADR）
│   ├── deployment/      # デプロイメント関連ドキュメント
│   └── api/            # API仕様とドキュメント
├── public/
│   └── images/         # 静的画像ファイル
├── src/
│   ├── app/           # Next.jsページコンポーネント
│   ├── components/    # 共有コンポーネント
│   └── utils/        # ユーティリティ関数
└── utils/            # グローバルユーティリティ
```

## アーキテクチャの主要な決定事項

1. 静的サイト生成 (SSG)
   - パフォーマンスとSEO最適化のため
   - 詳細は [ADR-001](./adr-001-static-site-generation.md) を参照

2. コンポーネント設計
   - アトミックデザインの採用
   - 再利用可能なコンポーネントの作成
   - 詳細は [ADR-002](./adr-002-component-design.md) を参照

3. パフォーマンス最適化
   - 画像の最適化
   - コードの分割
   - 遅延読み込み
   - 詳細は [ADR-003](./adr-003-performance-optimization.md) を参照

4. 画像最適化戦略
   - カスタムOptimizedImageコンポーネント
   - 画像の最適な管理と提供
   - 詳細は [ADR-004](./adr-004-image-optimization.md) を参照

## コーディング規約

- TypeScriptの厳格モードを使用
- ESLintとPrettierによるコード品質の維持
- コンポーネントの命名規則は`PascalCase`
- ファイル名は機能を表す名詞を使用

## 依存関係管理

- npmを使用したパッケージ管理
- 定期的な依存関係の更新
- セキュリティ脆弱性のモニタリング

## デプロイメント

- Netlifyを使用した自動デプロイ
- 本番環境と開発環境の分離
- 環境変数による設定管理

## パフォーマンス目標

- Lighthouse スコア
  - パフォーマンス: 90+
  - アクセシビリティ: 90+
  - ベストプラクティス: 90+
  - SEO: 90+

## セキュリティ考慮事項

- CSP (Content Security Policy) の実装
- HTTPS の強制
- セキュアなフォーム処理
- 適切なCORS設定 