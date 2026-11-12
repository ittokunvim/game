# Copilot instructions

## Repository structure

- 公開サイトは `docs/` 配下で管理する。
- トップページは `docs/index.html`、スタイルは `docs/style.css`、
  ゲーム一覧の生成処理は `docs/script.js` にある。
- 各 Godot ゲームのエクスポート済みファイルは `docs/<slug>/` に配置されている。
  生成済みの Godot エクスポートファイルは、必要がない限り変更しない。

## Game catalog

- ゲーム一覧のデータは `docs/data.json` で管理する。
- 各ゲームの `slug` は以下と完全に一致させる。
  - ゲームの公開ディレクトリ: `docs/<slug>/`
  - 一覧用サムネイル: `docs/images/<slug>.png`
- `data.json` の各エントリには `slug`、`title`、`description`、
  `createdAt`、`updatedAt` を含める。
- 日付は `YYYY-MM-DD` 形式で保存する。
- ゲームを追加・削除・リネームした場合は、データ、公開ディレクトリ、
  サムネイル、README のゲーム一覧を併せて更新する。

## Frontend changes

- HTML の言語は日本語（`lang="ja"`）を維持する。
- 画像には内容を識別できる代替テキストを設定する。
- データ取得や JSON 解析に失敗した場合は、コンソール出力だけにせず、
  利用者に分かるエラーメッセージを表示する。
- DOM を生成するときは、データを `textContent` に設定して扱う。
- 既存のコードスタイルに合わせ、インデントとセミコロンの有無を
  変更対象ファイル内で統一する。

## Verification

- `docs/data.json` を変更した場合は、有効な JSON であることを確認する。
- カタログを変更した場合は、各ゲームカードのリンク、サムネイル、
  作成日、更新日が正しいことを確認する。
