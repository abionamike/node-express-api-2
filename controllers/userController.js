import User from '../model/userModel.js';

const get_Users = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: 'Users not found' });
    }
}

const get_A_User = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: `User with the id ${req.params.id} not found` });
    }
}

const post_Users = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.json(user);
        
    } catch (error) {
        res.status(403).json({ message: 'Bad Request' });
    }
}

const update_Users = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { name, email } = req.body;

        user.name = name || user.name;
        user.email = email || user.email;
        const updatedUser = await user.save();
        res.json(updatedUser);
        
    } catch (error) {
        res.status(404).json({ message: `user with the id ${req.params.id} not found` });
    }
}

const delete_Users = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: `User with the id ${req.params.id} was deleted successfully` });
    } catch (error) {
        res.status(404).json({ message: `user not found` });   
    }
}

export { get_Users, get_A_User, post_Users, update_Users, delete_Users };