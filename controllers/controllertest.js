const db = require('../database');

exports.about_get = async (req, res) => {
	await db.query('SELECT * FROM users', (err, response) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json(response);
		}
	});
};

