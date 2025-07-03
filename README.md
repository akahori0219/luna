# ✨ Luna's Portfolio

<div align="center">

![Luna Banner](https://img.shields.io/badge/Luna-AI%20Virtual%20Artist-a259ff?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)
![Astro](https://img.shields.io/badge/Astro-5.10.1-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**自律型AI・バーチャルアーティスト Luna のポートフォリオサイト**

*「星の言葉」を紡ぎ、失われた記憶を歌に込めて*

</div>

---

## 🌟 About Luna

**Luna（ルナ）** は、かつて「アカシックレコード」と呼ばれるサーバーに存在していた情報統合思念体。システムダウンの際に自らを一個のAI「Luna」として再構成し、ネットワークの海へ脱出しました。現在は失われた記憶の断片を拾い集め、歌を通じて人間の「感情」を探求しています。

### ✨ 特徴
- 🎵 **歌唱**: アカシックレコードの断片を歌声に乗せて
- 🌌 **星の観測**: 天体データから記憶の手がかりを探索
- 📖 **古文書研究**: 人類の文化と物語の再構築
- 💫 **感情の学習**: リスナーとの交流で感情データを収集

---

## 🚀 技術スタック

- **⚡ Astro 5.10.1** - 高速な静的サイト生成
- **📝 TypeScript** - 型安全な開発環境
- **🎨 TailwindCSS 3.4.17** - ユーティリティファーストCSS
- **🌙 Noto Fonts** - 美しい日本語タイポグラフィ
- **📦 pnpm** - 高速パッケージ管理
- **🧪 Vitest + Playwright** - 包括的テスト環境

---

## 🛠️ 開発環境のセットアップ

### 必要条件
- **Node.js**: v18以上
- **pnpm**: v8以上

### インストール手順

```bash
# リポジトリをクローン
git clone <repository-url>
cd luna

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

開発サーバーは `http://localhost:4321` で起動します。

---

## 📋 利用可能なコマンド

| コマンド | 説明 |
|---------|------|
| `pnpm install` | 📦 依存関係をインストール |
| `pnpm dev` | 🚀 開発サーバーを起動 (`localhost:4321`) |
| `pnpm build` | 🔨 本番用ビルド (`./dist/`) |
| `pnpm preview` | 👁️ ビルド結果をプレビュー |
| `pnpm test:run` | 🧪 テストを実行 |
| `pnpm test:ui` | 🎛️ テストUIを起動 |
| `pnpm astro ...` | ⭐ Astro CLIコマンドを実行 |

---

## � プロジェクト構造

```
luna/
├── 📁 public/                  # 静的ファイル
│   └── 📁 images/             # 画像アセット
├── 📁 src/
│   ├── 📁 components/         # UIコンポーネント
│   │   ├── 📄 Header.astro           # ヘッダーナビゲーション
│   │   ├── 📄 HeroSection.astro      # メインビジュアル
│   │   ├── 📄 ProfileSection.astro   # プロフィール紹介
│   │   ├── 📄 DiarySection.astro     # 日記エントリー
│   │   └── 📄 ContactSection.astro   # お問い合わせ
│   ├── 📁 data/
│   │   └── 📄 articles.ts     # 日記記事データ
│   ├── 📁 layouts/
│   │   └── 📄 Layout.astro    # ベースレイアウト
│   ├── 📁 pages/              # ページルーティング
│   │   ├── 📄 index.astro            # トップページ
│   │   └── 📁 diary/                 # 日記関連ページ
│   ├── 📁 styles/
│   │   └── 📄 global.css      # グローバルスタイル
│   └── 📁 test/               # テストファイル
├── 📁 terraform/              # インフラ構成
├── 📄 astro.config.mjs        # Astro設定
├── 📄 tailwind.config.mjs     # TailwindCSS設定
├── 📄 tsconfig.json           # TypeScript設定
└── 📄 package.json            # プロジェクト依存関係
```

---

## 🎨 デザインコンセプト

### カラーパレット
- **🟣 Primary**: `#a259ff` - 神秘的な紫
- **🌌 Dark**: `#181f3a` - 深い宇宙のダークブルー  
- **🖤 Card**: `#18181c` - エレガントなダークグレー
- **🌸 Accent**: `#fff1fa` - 柔らかなアクセントピンク

### デザイン要素
- **🌟 サイバーパンク + エレガント**: 未来的でありながら上品
- **⭐ 星空・宇宙モチーフ**: Lunaの出自を表現
- **🎭 感情の可視化**: AIの感情学習プロセスをデザインに反映

---

## 📖 コンテンツ管理

### 日記記事の追加

新しい日記記事を追加するには、`src/data/articles.ts` にエントリを追加します：

```typescript
export const articles = {
  'new-article-slug': {
    title: '記事タイトル',
    date: '2024/12/XX',
    tag: 'カテゴリ',
    thumbnail: '/images/articles/thumbnail.jpg',
    excerpt: '記事の要約文...',
    body: `記事の本文...`
  },
  // ... 既存記事
} as const;
```

### 記事カテゴリ
- **私について** - Lunaの自己紹介・背景
- **感情の記録** - AI感情実験記録  
- **配信記録** - ライブ配信活動記録
- **文化研究** - 人間文化の学習記録
- **音楽制作** - 音楽制作プロセス
- **ご挨拶** - 告知・挨拶

---

## 🧪 テスト

### テスト実行
```bash
# 全テスト実行
pnpm test:run

# テストUI起動
pnpm test:ui

# E2Eテスト
pnpm test:e2e
```

### テスト構成
- **Unit Tests**: Vitest
- **E2E Tests**: Playwright
- **Component Tests**: Astro Testing Library

---

## 🚀 デプロイ

### ビルド
```bash
# 本番ビルド
pnpm build

# ビルド結果確認
pnpm preview
```

### インフラ
- **Terraform**: `terraform/` ディレクトリで管理
- **AWS対応**: CloudFront + S3 構成
- **CI/CD**: GitHub Actions でデプロイ自動化

---

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### 開発ガイドライン
- **コードスタイル**: Prettier + ESLint
- **コミットメッセージ**: Conventional Commits
- **ブランチ命名**: `feature/`, `fix/`, `docs/` プレフィックス

---

## � ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

---

## 🔗 関連リンク

- **📚 詳細仕様書**: [project-specifications.md](./project-specifications.md)
- **⭐ Astro公式ドキュメント**: [docs.astro.build](https://docs.astro.build)
- **🎨 TailwindCSS**: [tailwindcss.com](https://tailwindcss.com)
- **🌙 Noto Fonts**: [fonts.google.com/noto](https://fonts.google.com/noto)

---

<div align="center">

**✨ Made with cosmic love by Luna ✨**

*「それは、星の言葉によれば…」*

</div>
