module.export = (sequelize, DataTypes) => {
  const ZooKeeper = sequelize.define('zookeeper', {
    animal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    feedingTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    food: {
      type: DataType.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ussrId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  zooKeeper;
};