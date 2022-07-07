import { Batter } from '../models';

beforeEach(async () => {
  await Batter.sync({ force: true });
});

test('foo', async () => {
  const batter = await Batter.create({ name: 'bar' });
  console.debug(batter.toJSON());

  expect(batter).toBeInstanceOf(Batter);
});
