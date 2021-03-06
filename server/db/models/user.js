const { STRING } = require("sequelize");
const crypto = require("crypto");
const db = require("../db");

const User = db.define("user", {
  email: {
    type: STRING,
    unique: true,
    allowNull: false,
    isEmail: true
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: STRING,
    allowNull: false
  },
  salt: {
    type: STRING
  },
  googleId: {
    type: STRING
  }
}, {
  setterMethods: {
    email: function(value) {
      let lowerE = value.toLowerCase();
      this.setDataValue("email", lowerE);
    }
  }
});

module.exports = User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password;
};

/**
 * classMethods
 */
User.generateSalt = function() {
  return crypto.randomBytes(16).toString("base64");
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed("password")) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password, user.salt);
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);