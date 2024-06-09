const games = document.querySelector("#games");

const JsonPath = "./data.json";
const GamesTitle = "ゲーム一覧";

// JSON structure
// {
//   "slug": "string",
//   "name": "string",
//   "description": "string",
//   "thumbnail": "string",
//   "width": "number",
//   "height": "number"
// }

async function fetchJson() {
	try {
		const response = await fetch(JsonPath, { cache: "no-store" });
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

window.onload =  async function() {
	const data = await fetchJson();
	const gamesTitle = document.createElement("h2");
	const gamesList = document.createElement("div");

	gamesTitle.textContent = GamesTitle;
	gamesList.classList.add("list");

	data.forEach((game) => {
		const myGame = document.createElement('div');
		const gameThumbnail = createGameThumbnail(game.slug, game.thumbnail);
		const gameLink = createGameLink(game.slug, game.name);
		const gameDescription = createGameDescription(game.description);
		const gameScreenSize = createGameScreenSize(game.width, game.height);

		myGame.classList.add('item');

		myGame.appendChild(gameThumbnail);
		myGame.appendChild(gameLink);
		myGame.appendChild(gameDescription);
		myGame.appendChild(gameScreenSize);

		gamesList.appendChild(myGame);
	});

	games.appendChild(gamesTitle);
	games.appendChild(gamesList);
}

function createGameLink(slug, name) {
	const myLink = document.createElement('div');
	myLink.classList.add('link');

	const myA = document.createElement('a');
	myA.href = slug;
	myA.textContent = name;
	myLink.appendChild(myA);

	return myLink;
}

function createGameDescription(description) {
	const myDesc = document.createElement('div');
	myDesc.classList.add('description');

	const myPara = document.createElement('p');
	myPara.textContent = description;
	myDesc.appendChild(myPara);

	return myDesc;
}

function splitImageSize(image) {
	image = image.split('.').slice(0, -1).join('.') // Remove extension

	return image.split('x'); // split width and height
}

function createGameThumbnail(slug, image) {
	const myThumbnail = document.createElement('div');
	myThumbnail.classList.add('thumbnail');

	const myImg = document.createElement('img');
	const imageUrl = slug + "/" + image;
	const [width, height] = splitImageSize(image);

	myImg.src = imageUrl;
	myImg.width = width;
	myImg.height = height;
	myImg.loading = "lazy";
	myThumbnail.appendChild(myImg);

	return myThumbnail;
}

function createGameScreenSize(width, height) {
	const myScreenSize = document.createElement('div');
	myScreenSize.classList.add('size');

	const myPara = document.createElement('p');
	myPara.textContent = "画面サイズ: " + width + "x" + height;
	myScreenSize.appendChild(myPara);

	return myScreenSize;
}
