import { Factory } from 'fishery';
import { Batter } from '..';
import { faker } from '@faker-js/faker';

export const BatterFactory = Factory.define(({ onCreate }) => {
  onCreate((batter) => Batter.create(batter));

  return Batter.build({
    name: faker.name.lastName(),
    atBats: faker.datatype.number(99),
    runs: faker.datatype.number(99),
    hits: faker.datatype.number(99),
    doubles: faker.datatype.number(99),
    tripples: faker.datatype.number(99),
    homeRuns: faker.datatype.number(99),
    runsBattedIn: faker.datatype.number(99),
    walks: faker.datatype.number(99),
    strikeOuts: faker.datatype.number(99),
  });
});
