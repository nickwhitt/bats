import { Batter } from './models';

(async () => {
  Batter.findOne().then((b) => console.debug(b?.toJSON()));
})();
