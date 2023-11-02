const Sequelize = require('sequelize')
	, bcrypt = require('bcrypt');//

module.exports = (sequelize, options) => {
	let User = sequelize.define('users', {
		id: {
			type: Sequelize.BIGINT,
			primaryKey: true,
			autoIncrement: true,
		},
		first_name: Sequelize.STRING,
		last_name: Sequelize.STRING,
		email: {type:Sequelize.STRING,unique:true, allowNull: false},
		password: Sequelize.STRING,
		created_at: Sequelize.DATE,
		updated_at: Sequelize.DATE,
	}, {
		...options, 
		hooks: {
			beforeCreate: user => {
				if(user.password)
					user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
				user.created_at = Date.now();
				user.updated_at = Date.now();
			},
		},
		instanceMethods: {
			validPassword: function (password) {
				// return bcrypt.compareSync(password, this.password);
			}
		}
	})
	User.associate = models => {
		User.hasMany(models.Post, {as: 'posts', foreignKey: 'user_id'});
	}
	console.log(User, "user output")
	return User;
}