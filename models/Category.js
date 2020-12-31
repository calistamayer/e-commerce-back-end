const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// create Category model
class Category extends Model {}

// create fields/columns for Category model
Category.init(
  {
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // table configuration options go here

    // imported sequelize conection
    sequelize,
    // don't auto-create timestamps
    timestamps: false,
    // don't pluralize name of db table
    freezeTableName: true,
    // underscores instead of camel case
    underscored: true,
    // model name stays lowercase in db
    modelName: 'category',
  }
);

module.exports = Category;
