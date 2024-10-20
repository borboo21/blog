const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { register, login } = require('./controllers/user');
const mapUser = require('./helpers/mapUser');

const port = 3001;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.post('/register', async (req, res) => {
	try {
		const user = await register(req.body.login, req.body.password);

		res.send({ error: null, user: mapUser(user) });
	} catch (error) {
		res.send({ error: error.message || 'Unknown error' });
	}
});

app.post('/login', async (req, res) => {
	try {
		const { user, token } = await login(req.body.login, req.body.password);

		res.cookie('token', token, { httpOnly: true }).send({
			error: null,
			user: mapUser(user),
		});
	} catch (error) {
		res.send({ error: error.message || 'Unknown error' });
	}
});

app.post('/logout', (req, res) => {
	res.cookie('token', '', { httpOnly: true }).send({});
});

mongoose
	.connect(
		'mongodb+srv://bor_boo:qwerty123@cluster0.trqbh.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0',
	)
	.then(() => {
		app.listen(port, () => {
			console.log(`Server started on port ${port}`);
		});
	});
