import User from '../models/User';

class UserController {
    store(req, res) {
        const userExists = User.findOne({ where: { email: req.body.email } });

        if (userExists) {
            return res.status(400).json({ error: 'email already in use' });
        }

        const user = User.create(req.body);

        return res.json({
            id: user.id,
            name: user.name,
            email: user.email,
        });
    }
}

export default new UserController();
