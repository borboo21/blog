import { addUser } from '../api/add-user';
import { getUser } from '../api/get-user';
import { sessions } from '../sessions';

export const register = async (regLogin, regPassword) => {
	const existedUser = await getUser(regLogin);

	if (existedUser) {
		return {
			error: 'Такой логин уже занят',
			res: null,
		};
	}

	const user = await addUser(regLogin, regPassword);
	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.roleId,
			session: sessions.create(user),
		},
	};
};
