const games = document.getElementById("games")

const JSONPATH = "./data.json"
const TITLE = "ゲーム一覧"

// JSON structure
// {
//   "slug": "string",
//   "title": "string",
//   "description": "string",
//   "createdAt": "string"
//   "updatedAt": "string"
// }

async function fetchJson() {
	try {
		const response = await fetch(JSONPATH, { cache: "no-store" })
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

  // <div class="item">
  // <div class="thumbnail">
  // <img src="images/godot-pong.png"></div>
  // <a class="title" href="godot-pong">Pongゲーム (Godot)</a>
  // <div class="description">Godotで作ったPongゲーム</div>
  // <div class="createdAt">作成日時：2026年9月11日</div>
  // <div class="updatedAt">更新日時：2026年9月11日</div>
  // </div>
  window.onload =  async function() {
    const data = await fetchJson()
    const headline = document.createElement("h2");
    const list = document.createElement("div")

    list.classList.add("list")
    headline.textContent = TITLE

    data.forEach((data) => {
      const item = document.createElement("div");
      item.className = "item";

      const thumbnail = document.createElement("div");
      thumbnail.className = "thumbnail";

      const image = document.createElement("img");
      image.src = `images/${data.slug}.png`;
      image.alt = "ゲームのサムネイル";

      thumbnail.appendChild(image);

      const title = document.createElement("a");
      title.className = "title";
      title.href = data.slug;
      title.textContent = data.title;

      const description = document.createElement("div");
      description.className = "description";
      description.textContent = data.description

      const createdAt = document.createElement("div");
      createdAt.className = "createdAt";
      createdAt.textContent = data.createdAt

      const updatedAt = document.createElement("div");
      updatedAt.className = "updatedAt";
      updatedAt.textContent = data.createdAt

      item.append(
        thumbnail,
        title,
        description,
        createdAt,
        updatedAt,
      );
      list.appendChild(item)
    })

    games.appendChild(headline)
    games.appendChild(list)
  }	

function formatDate(date) {
  date = new Date(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
}

