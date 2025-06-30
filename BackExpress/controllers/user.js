import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signup = async (req, res) => {
    console.log('Received signup request:', req.body);
    try {

        //verified if the email exists
        const existingUser = await User.findOne({email: req.body.email});
        if (existingUser){
            return res.status(400).json({
                error: "Email deja utilisé"
            });
        }

        //hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            email: req.body.email,
            passsword: hashedPassword
        });

        await user.save();
        res.status(201).json({
            message: "Utilisateur créé avec succès!"
        });     
    } catch (error) {
        console.error('Erreur survenue lors du sign up', error);
        res.status(500).json({
            error: error.message
        });
    }
};

export const login = async (req, res) => {

}

