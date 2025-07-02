# Luna Project - Cloudflare Pages Terraform Configuration

このディレクトリには、LunaプロジェクトをCloudflare PagesにデプロイするためのTerraform設定ファイルが含まれています。

## 前提条件

- Terraform がインストールされていること
- Cloudflare アカウントを持っていること
- GitHub リポジトリが作成されていること
- Cloudflare API トークンが取得済みであること

## セットアップ手順

### 1. Cloudflare API トークンの設定

以下のいずれかの方法でAPI トークンを設定してください：

**方法A: terraform.tfvars ファイルで設定（推奨）**

`terraform.tfvars` ファイル内の `YOUR_CLOUDFLARE_API_TOKEN_HERE` を実際のAPI トークンに置き換えてください：

```hcl
cloudflare_api_token = "your_actual_api_token_here"
```

**方法B: 環境変数で設定**

```bash
export CLOUDFLARE_API_TOKEN="your_api_token_here"
```

この場合、`terraform.tfvars` の `cloudflare_api_token` 行をコメントアウトまたは削除してください。

### 2. Terraform の初期化

```bash
cd terraform
terraform init
```

### 3. 実行計画の確認

```bash
terraform plan
```

### 4. リソースの作成

```bash
terraform apply
```

## 設定ファイル

- `main.tf`: Cloudflare Pages プロジェクトのメイン設定
- `variables.tf`: 変数の定義
- `terraform.tfvars`: 変数の値（このファイルは `.gitignore` に含まれています）

## 作成されるリソース

- **Cloudflare Pages Project**: `luna-site`
  - GitHub リポジトリとの連携
  - 自動ビルド設定（`pnpm run build`）
  - プロダクションブランチ: `master`

## 出力

- `pages_subdomain`: Cloudflare Pages のサブドメイン
- `pages_url`: Cloudflare Pages の完全な URL

## トラブルシューティング

### GitHub 連携の認証エラー

初回実行時に GitHub との連携で認証エラーが発生する場合は、Cloudflare ダッシュボードで手動で GitHub アクセスを許可する必要があります。

### ビルドエラー

プロジェクトのビルドが失敗する場合は、以下を確認してください：

- `package.json` に `build` スクリプトが定義されているか
- 必要な依存関係がすべてインストールされているか
- Astro の Cloudflare アダプターが正しく設定されているか

## クリーンアップ

リソースを削除する場合：

```bash
terraform destroy
``` 