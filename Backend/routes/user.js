const express = require('express');
const hasRole = require('../middlewares/hasRole');
const { getUsers, getRoles, updateUser, deleteUser } = require('../controllers/user');
const mapUser = require('../helpers/mapUser');
const router = express.Router({ mergeParams: true });
const ROLES = require('../constants/roles');
const auth = require('../middlewares/auth');

router.get('/', auth, hasRole([ROLES.ADMIN]), async (req, res) => {
	const users = await getUsers();

	res.send({ data: users.map(mapUser) });
});

router.get('/roles', auth, hasRole([ROLES.ADMIN]), async (req, res) => {
	const roles = getRoles();

	res.send({ data: roles });
});

router.patch('/:id', auth, hasRole([ROLES.ADMIN]), async (req, res) => {
	const newUser = await updateUser(req.params.id, {
		role: req.body.roleId,
	});

	res.send({ data: mapUser(newUser) });
});

router.delete('/:id', auth, hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteUser(req.params.id);

	res.send({ error: null });
});

module.exports = router;
