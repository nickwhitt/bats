import { Batter } from '..';
import { BatterFactory } from '../factories';

describe('Batters', () => {
  beforeEach(async () => {
    await Batter.sync({ force: true });
  });

  test('batter instance', async () => {
    expect(BatterFactory.build()).toBeInstanceOf(Batter);
  });

  test('batting average', async () => {
    expect(BatterFactory.build({ atBats: 10, hits: 5 }).battingAverage()).toBe(
      '0.500'
    );
  });

  test('total bases', async () => {
    expect(
      BatterFactory.build({
        hits: 16,
        doubles: 8,
        tripples: 4,
        homeRuns: 2,
      }).totalBases()
    ).toBe(38);
  });

  test('slugging percentage', async () => {
    const batter = expect(
      BatterFactory.build({
        atBats: 64,
        hits: 16,
        doubles: 8,
        tripples: 4,
        homeRuns: 2,
      }).sluggingPercentage()
    ).toBe('0.594');
  });
});
