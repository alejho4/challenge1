export default (sequelize, type) => {
	return sequelize.define('post', {
				id: {
					type: type.INTEGER,
					primaryKey: true,
					autoIncrement: true

				},

				title: type.STRING,
				content: type.STRING,
				image: type.STRING,
				category: type.STRING,
				creation_date: type.DATE
	})
}