# コンポーネント設計ガイドライン

## ディレクトリ構造

```
components/
├── atoms/        # 最小単位のコンポーネント
│   ├── Button/
│   ├── Input/
│   └── Text/
├── molecules/    # atomsを組み合わせたコンポーネント
│   ├── SearchBox/
│   └── MenuItem/
├── organisms/    # 特定の機能を持つ大きなコンポーネント
│   ├── Header/
│   ├── Footer/
│   └── Sidebar/
├── templates/    # ページレイアウトのテンプレート
│   ├── DefaultLayout/
│   └── AdminLayout/
└── providers/    # コンテキストプロバイダー
    └── ThemeProvider/
```

## コンポーネントの作成規則

1. **ディレクトリ構造**
   ```
   ComponentName/
   ├── index.tsx          # メインコンポーネント
   ├── ComponentName.tsx  # 実装
   ├── styles.module.css  # スタイル（必要な場合）
   ├── types.ts          # 型定義
   └── tests/            # テスト
   ```

2. **命名規則**
   - コンポーネント名: PascalCase
   - ファイル名: コンポーネント名と同じ
   - スタイル: キャメルケース

3. **型定義**
   ```typescript
   export interface ComponentProps {
     children?: React.ReactNode;
     className?: string;
     // その他のプロパティ
   }
   ```

4. **実装例**
   ```typescript
   import { FC } from 'react';
   import { ComponentProps } from './types';
   
   export const Component: FC<ComponentProps> = ({
     children,
     className,
     ...props
   }) => {
     return (
       <div className={className} {...props}>
         {children}
       </div>
     );
   };
   ```

## ベストプラクティス

1. **コンポーネントの責務**
   - 単一責任の原則に従う
   - プロップドリリングを避ける
   - 適切なエラー処理

2. **パフォーマンス**
   - メモ化の適切な使用
   - 不要なレンダリングの防止
   - 遅延ローディングの活用

3. **アクセシビリティ**
   - WAI-ARIAの適切な使用
   - キーボード操作のサポート
   - 色のコントラスト比の確保

4. **テスト**
   - ユニットテストの作成
   - インタラクションテスト
   - スナップショットテスト

## 注意点

1. コンポーネントは可能な限り純粋関数として実装
2. 副作用は適切なフックで管理
3. プロップの型は明示的に定義
4. 不要なレンダリングを防ぐためのメモ化を検討 