terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  # CLOUDFLARE_API_TOKEN 環境変数を自動的に使用
}

resource "cloudflare_pages_project" "luna" {
  account_id        = var.cloudflare_account_id
  name              = "luna-project"
  production_branch = "master"

  source {
    type = "github"
    config {
      owner                 = var.github_owner
      repo_name             = var.github_repo_name
      production_branch     = "master"
      pr_comments_enabled   = true
      deployments_enabled   = true
    }
  }

  build_config {
    build_command   = "pnpm run build"
    destination_dir = "dist"
  }
}

output "pages_subdomain" {
  description = "The subdomain for the Cloudflare Pages project."
  value       = cloudflare_pages_project.luna.subdomain
}

output "pages_url" {
  description = "The full URL for the Cloudflare Pages project."
  value       = "https://${cloudflare_pages_project.luna.subdomain}"
}