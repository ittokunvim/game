/**
 * REQUIRED
 * <div id="games"></div>
 **/

// import games from "./games.json" assert { type: "json" };

function createGameLink(slug, name) {
	const createLink = document.createElement('div');
	createLink.classList.add('link');

	const createAnchor = document.createElement('a');
	createAnchor.href = slug;
	createAnchor.textContent = name;
	createLink.appendChild(createAnchor);

	return createLink;
}

function createGameDescription(description) {
	const createDescription = document.createElement('div');
	createDescription.classList.add('description');

	const createParagraph = document.createElement('p');
	createParagraph.textContent = description;
	createDescription.appendChild(createParagraph);

	return createDescription;
}

function splitImageSize(image) {
	image = image.split('.').slice(0, -1).join('.') // Remove extension

	return image.split('x'); // split width and height
}

function createGameThumbnail(slug, image) {
	const createThumbnail = document.createElement('div');
	createThumbnail.classList.add('thumbnail');

	const createImage = document.createElement('img');
	const imageUrl = slug + "/" + image;
	const [width, height] = splitImageSize(image);

	createImage.src = imageUrl;
	createImage.width = width;
	createImage.height = height;
	createImage.loading = "lazy";
	createThumbnail.appendChild(createImage);

	return createThumbnail;
}

function createGameScreenSize(width, height) {
	const createScreenSize = document.createElement('div');
	createScreenSize.classList.add('size');

	const createParagraph = document.createElement('p');
	createParagraph.textContent = "画面サイズ: " + width + "x" + height;
	createScreenSize.appendChild(createParagraph);

	return createScreenSize;
}

const gameList = document.querySelector('#games');

window.onload =  async function() {
	const response = await fetch('./games.json');
	const games = await response.json();

	games.forEach(function(game) {
		const createGame = document.createElement('div');
		createGame.classList.add('game');

		const gameThumbnail = createGameThumbnail(game.slug, game.thumbnail);
		const gameLink = createGameLink(game.slug, game.name);
		const gameDescription = createGameDescription(game.description);
		const gameScreenSize = createGameScreenSize(game.width, game.height);

		createGame.appendChild(gameThumbnail);
		createGame.appendChild(gameLink);
		createGame.appendChild(gameDescription);
		createGame.appendChild(gameScreenSize);

		gameList.appendChild(createGame);
	});
}
