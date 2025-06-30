import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

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
    User.findOne({
        email: req.body.email
    })
    .then(async (user) => {
           if (user === null) {
                return res.status(401).json({
                    message: "Paire identifiant/mot de passe incorrect"
                })
           }else {
                bcrypt.compare(req.body.passsword, user.password)
                .then(valid => {
                    if (!valid){
                        return res.status(401).json({
                            message: "Paire identifiant/mot de passe incorrect"
                        })
                    }else{
                        return res.status(200).json({
                            userId: user._id,
                            token: jwt.sign(
                                {
                                    userId: user._id
                                },
                                'RANDOM_TOKEN_SECRET',
                                {
                                    expiressIn: '24h'
                                }
                            )
                        });
                    }
                })
                .catch(error => res.status(500).json({error}));
           }
        
    })
    .catch(error => res.status(500).json({error}));
}

