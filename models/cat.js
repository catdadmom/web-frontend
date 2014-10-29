'use strict';

module.exports = function (sequelize, DataTypes) {
  var Cat = sequelize.define('Cat', {
    name: {
      type: DataTypes.STRING
    },

    age: {
      type: DataTypes.INTEGER,
      validate: {min: 0, max: 100, isNumeric: true}
    },

    sex: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
    },

    neutralization: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Cat.hasMany(models.User, {through: 'users_carefor_cats'});
        Cat.hasMany(models.Photo);
      }
    }
  });

  return Cat;
};
