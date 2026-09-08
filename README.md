# Portfolio

個人ポートフォリオサイト。ビルドツール無しの静的サイトを GitHub Pages で配信する。GitHub description: 「俺のポートフォリオ」。

- **本番**: https://yushin0319.github.io/Portfolio/

## スタック

- HTML / CSS / JavaScript（Vanilla、ビルドステップなし）
- Google Fonts: Inter / JetBrains Mono / Noto Sans JP
- ホスティング: GitHub Pages（`main` ブランチのルートを配信）

## 構成

```
index.html   ページ本体（nav + 6 セクション）
styles.css   スタイル（392 行）
script.js    インタラクション（107 行）
```

## セクション

| id | 内容 |
|----|------|
| `hero` | トップビジュアル（Canvas パーティクル背景） |
| `about` | 自己紹介 |
| `skills` | 技術スキル一覧 |
| `projects` | 制作物紹介 |
| `career` | 経歴 |
| `contact` | 連絡先 |

## script.js の機能

- Canvas パーティクル背景（`#particles`、リサイズ追従）
- `IntersectionObserver` によるセクションのフェードイン
- スクロール量に応じた nav のスタイル切り替え
- モバイル用ハンバーガーメニュー（`#nav-toggle` / `#nav-links`、リンク押下で閉じる）

## 開発

ビルド不要。ローカルで開くだけで確認できる:

```bash
# そのままブラウザで開く
start index.html          # Windows

# もしくは簡易サーバー経由
python -m http.server 8000
```

## デプロイ

- GitHub Pages が `main` への push を検知して自動反映（source: `main` / `/`）
- CI: PR レビューは `.github/workflows/gemini-review.yml`、Dependabot patch/minor は `dependabot-automerge.yml` で auto-merge
