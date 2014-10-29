'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {isEmail: true}
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        User.hasMany(models.Cat, {through: 'users_carefor_cats'});
      }
    },
    instanceMethods: {
      setPassword: function (password, done) {
        return bcrypt.genSalt(10, function (err) {
          return bcrypt.hash(password, salt, function (error, encrypted) {
            this.password = encrypted;
            this.salt = salt;
            return done();
          });
        });
      }
    }
  });

  return User;
};
