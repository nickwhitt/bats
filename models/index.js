import { Sequelize } from 'sequelize';
import BatterModel from './batter';

const config = {
  development: { dialect: 'sqlite', storage: './sqlite3.db' },
  test: 'sqlite::memory:',
};

const sequelize = new Sequelize(config[process.env.NODE_ENV ?? 'development']);

export const Batter = BatterModel(sequelize);
export default sequelize;
