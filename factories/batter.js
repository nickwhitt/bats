import { Factory } from 'fishery';
import { Batter } from '../models';
import { faker } from '@faker-js/faker';

export const BatterFactory = Factory.define(({ onCreate }) => {
  onCreate((batter) => Batter.create(batter));

  return Batter.build({
    name: faker.name.lastName(),
    atBats: faker.datatype.number(9),
    hits: faker.datatype.number(5),
  });
});
