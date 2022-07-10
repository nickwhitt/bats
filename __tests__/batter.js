import { Batter } from '../models';
import { BatterFactory } from '../factories/batter';

beforeEach(async () => {
  await Batter.sync({ force: true });
});

test('foo', async () => {
  const batter = await BatterFactory.build();
  console.debug(batter.toJSON());

  expect(batter).toBeInstanceOf(Batter);
});
