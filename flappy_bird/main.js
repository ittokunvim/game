import "./restart-audio-context.js";

import init from './wasm/flappy_bird.js';

init().catch((err) => {
  if (!err.message.startsWith("Using exceptions for control flow,")) {
    throw err;
  }
});
