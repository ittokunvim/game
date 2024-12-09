# games

ittokunvimが公開しているゲームサイト

また公開するゲームを`data.json`にまとめています。

JSON: [data.json](docs/data.json)

## 追加方法

ゲームを追加する際は以下のルールに従って行います。

1. `data.json`は以下の形式で追加する

```json
{
	"slug": "game-slug",
	"name": "ゲームのタイトル",
	"description": "ゲームの説明",
	"width": 800,
	"height": 600,
	"createdAt": "2024-12-10"
}
```

2. `docs`ディレクトリ下に`[slug].html`の形式で保存する

3. ゲームは`docs/wasm`ディレクトリ下に`slug`をファイル名にして保存する

4. サムネイル画像のサイズは`300x240`とする

5. `README.md`にはゲームのページリンクを貼って、確認できるようにする

## 目次

- `timing_game`
- `click_game`
- `2d_shooting`
- `frogger`
- `flappy_bird`
- `bevy-timing-game`
- `bevy-click-game`
