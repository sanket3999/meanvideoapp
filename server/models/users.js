/****************************************************************************************************************/
/*
 *  Users Model
 *  Author  :   Sanket Patel
 *  Date    :   2016.11.25
/****************************************************************************************************************/

/* load packages */

    var path = require('path');
    var Sequelize = require('sequelize');
    var crypto = require('crypto');
    var DataTypes = require("sequelize");

/* class variables */      

    var config = global.config;
    var password = config.password ? config.password : null;

/* initialize database connection */

var sequelize = new Sequelize(
        config.database,
	config.user,
	config.password,
	{
            logging: console.log,
            define: {
                timestamps: false
            }
        }
    );
/* Create User Model Using Sequelize */

 var User = sequelize.define('users', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        instanceMethods: {
            retrieveAll: function (onSuccess, onError) {
                User.findAll({}, { raw: true })
			.success(onSuccess).error(onError);
            },
            retrieveById: function (user_id, onSuccess, onError) {
                User.find({ where: { id: user_id } }, { raw: true })
			.success(onSuccess).error(onError);
            },
            add: function (onSuccess, onError) {
                var username = this.username;
                var password = this.password;
                
                var shasum = crypto.createHash('sha1');
                shasum.update(password);
                password = shasum.digest('hex');
                
                User.build({ username: username, password: password })
			.save().success(onSuccess).error(onError);
            },
            updateById: function (user_id, onSuccess, onError) {
                var id = user_id;
                var username = this.username;
                var password = this.password;
                
                var shasum = crypto.createHash('sha1');
                shasum.update(password);
                password = shasum.digest('hex');
                
                User.update({ username: username, password: password }, { id: id} ).success(onSuccess).error(onError);
            },
            removeById: function (user_id, onSuccess, onError) {
          //  User.destroy({ where: { id: user_id } }, { raw: true }).success(onSuccess).error(onError);
            
          //  User.destroy({ where: { id: user_id } }, { raw: true }).success(onSuccess).error(onError);

            User.destroy({ id: id }).success(onSuccess).error(onError);
            }
        }
    });

/* export model to make it avilable to server */

module.exports = User;

/****************************************************************************************************************/