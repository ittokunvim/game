/**
 * REQUIRED
 * <div id="games"></div>
 **/

import games from "./games.json" assert { type: "json" };

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

// function createGameThumbnail(image) {
// 	const createImage = document.createElement('div');
// 	createImage.classList.add('image');

// 	return createImage;
// }

function createGameScreenSize(width, height) {
	const createScreenSize = document.createElement('div');
	createScreenSize.classList.add('size');

	const createParagraph = document.createElement('p');
	createParagraph.textContent = "画面サイズ: " + width + "x" + height;
	createScreenSize.appendChild(createParagraph);

	return createScreenSize;
}

const gameList = document.querySelector('#games');

games.forEach(function(game) {
	const createGame = document.createElement('div');
	createGame.classList.add('game');

	const gameLink = createGameLink(game.slug, game.name);
	const gameDescription = createGameDescription(game.description);
	// const gameThumbnail = createGameThumbnail(game.thumbnail);
	const gameScreenSize = createGameScreenSize(game.width, game.height);

	createGame.appendChild(gameLink);
	createGame.appendChild(gameDescription);
	// createGame.appendChild(gameThumbnail);
	createGame.appendChild(gameScreenSize);

	gameList.appendChild(createGame);
});
