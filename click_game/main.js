import "./restart-audio-context.js";

import init from './wasm/click_game.js';

init().catch((err) => {
  if (!err.message.startsWith("Using exceptions for control flow,")) {
    throw err;
  }
});
