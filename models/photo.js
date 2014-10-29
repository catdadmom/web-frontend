'use strict';

module.exports = function (sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    path: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Photo.belongsTo(models.Cat);
      }
    }
  });

  return Photo;
};
