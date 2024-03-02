const bcrypt = require('bcryptjs');
const UserModel = require('../models/user.model');

exports.signup = async (req, res) => {
    const { name, email, password, dateOfBirth, longitude, latitude } = req.body;

    try {
        let existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            dateOfBirth,
            location: {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};