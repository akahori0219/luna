# Changelog

## 2025-01-02

- fix(build): Cloudflare Pagesデプロイ時のVitestインポートエラーを修正
  - `src/pages/diary/index.test.ts`を`src/test/diary-index.test.ts`に移動（Astroがページとして認識する問題を解決）
  - `astro.config.mjs`にVite設定を追加し、`import.meta.vitest`を無効化
  - テストファイルがビルドプロセスに含まれることを防止

## 2024-08-01

- Lunaのキャラクター設定を`luna-character.md`にまとめました。
- AstroプロジェクトをCloudflare Pages対応に設定しました。
  - `@astrojs/cloudflare`アダプターを追加
  - `astro.config.mjs`に`output: "server"`とCloudflareアダプターを設定
  - `tsconfig.json`にCloudflare用の型定義を追加
- TerraformによるCloudflare Pagesの自動デプロイ設定を構築しました。
  - `terraform/main.tf`: Cloudflare Pagesプロジェクトの定義
  - `terraform/variables.tf`: 変数の定義
  - `terraform/terraform.tfvars`: 環境固有の値設定
  - `terraform/README.md`: セットアップと運用手順
- `.gitignore`にTerraform関連ファイルを追加しました。

## 2024-07-27

- feat(header): サイトロゴを更新
- feat(header): 記事ページ専用のヘッダーを作成
- feat(profile): プロフィール画像を更新
- feat(diary): 記事一覧ページにタグ絞り込み機能を追加
- feat(diary): 記事ページにHeaderとFooterを適用し、サイト全体のデザインを統一
- feat(diary): ホームページの「もっと見る」ボタンから記事一覧ページへ遷移するように修正
- fix(diary): 記事一覧ページと記事詳細ページで発生していた文字化けを修正
    - `src/pages/diary/index.astro` に `Layout.astro` を適用
    - `src/pages/diary/[slug].astro` に `Layout.astro` を適用

## 2024-07-26

- feat: `todo.md`を作成
- test(diary): 記事一覧ページの表示をテスト
- feat(diary): 記事一覧に削除ボタンを追加
- feat(diary): E2Eテストで記事の削除機能を確認
- revert(diary): 記事削除機能の追加を中止

## 2024-06-28

- 全体の文字サイズを小さく調整
    - global.cssでbodyのfont-sizeを0.92remに設定
    - Layout.astroのbodyにtext-smを追加
    - HeroSection, ProfileSection, WorksSection, DiarySection, LinksSection, ContactSection, Features, FeatureCard, Header, Footerのtext-系クラス（text-4xl, text-3xl, text-2xl, text-xl, text-lg, text-base, text-sm, text-xsなど）を一段階ずつ小さく変更
    - ボタンやラベル、コピーライト等もバランスを見て小さく調整

- 背景のアニメーションを削除
    - global.cssから星空のアニメーション（animation: star-move1, star-move2）を削除
    - @keyframes star-move1, star-move2を削除
    - 静的な星空背景のみを残し、動きを停止

- 参考サイトのデザインに合わせて文字サイズ・配置・余白を調整
    - セクションタイトルをtext-4xl md:text-5xl font-extrabold uppercase text-centerに統一
    - 本文や説明文をtext-base md:text-lg text-centerに統一
    - カードタイトルをtext-lg font-bold text-center、本文をtext-sm text-centerに
    - ボタンをtext-base px-8 py-3に
    - セクション上下の余白をpy-20やmb-8等で統一
    - カードやフォーム、リンクの中央寄せ・幅調整
    - Diary, Links, Contact, Works, Profile各セクションで余白や配置も微調整

- HeroSectionを参考画像のデザインに忠実に修正
    - キャッチコピーをtext-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center mb-6に
    - サブコピーをtext-lg md:text-xl text-white text-center mb-8に
    - ボタンを中央寄せ・text-base px-8 py-3 font-bold border-2 border-white rounded-fullに
    - 余白や配置も画像に合わせてpt-48 pb-32等で調整
    - ボタン2つとも白枠・白文字・ホバーで反転 

## 2024-06-09

- ProfileSection: 画像とテキストをPC（md以上）では横並び、SPでは縦並びになるようにflexレイアウトを調整。
- ProfileSection: 名前（Luna）を文章の上に移動。
- ProfileSection: 文章の改行を理想の形に修正（適切な位置で改行）。
- ProfileSection: テキスト部分をmax-w-mdに変更し、break-keep hyphens-auto text-balanceを追加。文章を1文ごとにpタグで分割し、brタグを削除。
- ProfileSection: プロフィール画像にloading="lazy"属性を追加し、遅延読み込みを実装。
- ProfileSection: 画像・テキスト・余白・フォントサイズ・中央/左寄せをSP/PCで最適化し、Tailwindのレスポンシブユーティリティを最大限活用。
- Works, Diary, Links, CTA, Features各セクションにレスポンシブ最適化（py, px, フォントサイズ、余白、gap、中央/左寄せなど）を適用。 