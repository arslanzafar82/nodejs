module.exports = {
	port: process.env.PORT,
    db: {
		db: process.env.MYSQL_DB,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		host: process.env.MYSQL_HOST,
		port: process.env.MYSQL_PORT,
		cert: '/cert.crt',
	}
}