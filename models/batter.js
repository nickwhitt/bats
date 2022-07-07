import { Model, DataTypes } from 'sequelize';

class Batter extends Model {}

export default function (sequelize) {
  return Batter.init(
    {
      name: DataTypes.STRING,
      atBats: DataTypes.TINYINT,
      hits: DataTypes.TINYINT,
    },
    { sequelize }
  );
}
