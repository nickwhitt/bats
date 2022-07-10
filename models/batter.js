import { Model, DataTypes } from 'sequelize';

class Batter extends Model {
  battingAverage() {
    const avg = this.hits / this.atBats;
    return (avg === Infinity ? 0 : avg).toFixed(3);
  }

  totalBases() {
    return this.hits + this.doubles + this.tripples * 2 + this.homeRuns * 3;
  }

  sluggingPercentage() {
    const slg = this.totalBases() / this.atBats;
    return (slg === Infinity ? 0 : slg).toFixed(3);
  }
}

export default function (sequelize) {
  return Batter.init(
    {
      name: DataTypes.STRING,
      atBats: DataTypes.TINYINT,
      runs: DataTypes.TINYINT,
      hits: DataTypes.TINYINT,
      doubles: DataTypes.TINYINT,
      tripples: DataTypes.TINYINT,
      homeRuns: DataTypes.TINYINT,
      runsBattedIn: DataTypes.TINYINT,
      walks: DataTypes.TINYINT,
      strikeOuts: DataTypes.TINYINT,
    },
    { sequelize }
  );
}
