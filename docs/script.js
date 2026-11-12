const games = document.getElementById("games");

const JsonPath = "./data.json";
const GamesTitle = "ゲーム一覧";

// JSON structure
// {
//   "slug": "string",
//   "title": "string",
//   "description": "string",
//   "createdAt": "string"
//   "updatedAt": "string"
// }

async function fetchJson() {
  const response = await fetch(JsonPath, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(
      `ゲーム一覧の取得に失敗しました: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();

  data.sort((a, b) => {
    if (a.updatedAt === b.updatedAt) {
      return a.createdAt < b.createdAt ? 1 : -1;
    }

    return a.updatedAt < b.updatedAt ? 1 : -1;
  });

  data.forEach((doc) => {
    doc.createdAt = formatDate(doc.createdAt);
    doc.updatedAt = formatDate(doc.updatedAt);
  });

  return data;
}

// <div class="item">
// <div class="thumbnail">
// <img src="images/godot-pong.png"></div>
// <a class="title" href="godot-pong">Pongゲーム (Godot)</a>
// <div class="description">Godotで作ったPongゲーム</div>
// <div class="createdAt">作成日時：2026年9月11日</div>
// <div class="updatedAt">更新日時：2026年9月11日</div>
// </div>
async function createGameList() {
  try {
    const data = await fetchJson();
    const headline = document.createElement("h2");
    const list = document.createElement("div");

    list.classList.add("list");
    headline.textContent = GamesTitle;

    data.forEach((data) => {
      const item = document.createElement("div");
      item.className = "item";

      const thumbnail = document.createElement("div");
      thumbnail.className = "thumbnail";

      const image = document.createElement("img");
      image.src = `images/${data.slug}.png`;
      image.alt = `${data.slug}のサムネイル`;

      thumbnail.appendChild(image);

      const title = document.createElement("a");
      title.className = "title";
      title.href = data.slug;
      title.textContent = data.title;

      const description = document.createElement("div");
      description.className = "description";
      description.textContent = data.description;

      const createdAt = document.createElement("div");
      createdAt.className = "createdAt";
      createdAt.textContent = data.createdAt;

      const updatedAt = document.createElement("div");
      updatedAt.className = "updatedAt";
      updatedAt.textContent = data.updatedAt;

      item.append(thumbnail, title, description, createdAt, updatedAt);
      list.appendChild(item);
    });

    games.appendChild(headline);
    games.appendChild(list);
  } catch (error) {
    console.error(error);
    games.textContent = `${GamesTitle}を読み込めませんでした。時間をおいて再度お試しください。`;
  }
}

function formatDate(date) {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
}

createGameList();
