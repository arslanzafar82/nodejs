
console.log("before sequelize");
const Sequelize = require('sequelize')
	, config = require('../../config');//

    console.log(config.db.db)
let connection = new Sequelize(config.db.db, config.db.user, config.db.password, { 
    host: config.db.host,
    port: config.db.port, 
    
    ... (config.db.ssl === 'true' ? {
    operatorsAliases: false,
        dialectOptions: {
        ssl: {
            ca: './cert.crt',
            rejectUnauthorized: false
        }
    }} : {}),

    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 120000,
        idle: 30000
    },
    logging: false
});

const options = {
	freezeTableName: true,
	timestamps: false,
}

let queryInterface = connection.getQueryInterface();
const models = {
    User: require('./models/User')(connection, options),
    Post: require('./models/Post')(connection, options),
}


Object.keys(models).forEach(key => {
	//console.log(key);
	if('associate' in models[key]) {
		models[key].associate(models);
	}
})

connection.sync()
.then(() => console.log('synced tables.'))
.catch(err => console.log(err))

module.exports = {
	...models,
	connection
}