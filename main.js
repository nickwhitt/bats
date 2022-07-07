import { Batter } from './models/index.js';

(async () => {
  Batter.findOne().then((b) => console.debug(b?.toJSON()));
})();
