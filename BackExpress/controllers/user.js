import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/Users.js';

export const signup = async (req, res) => {
  console.log('Received signup request:', req.body);
  try {
    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email déjà utilisé' });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
    email: req.body.email,
    password: hashedPassword  
    });


    await user.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès !' });
  } catch (error) {
    console.error('Erreur lors du signup :', error);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

    res.status(200).json({
      userId: user._id,
      token: jwt.sign(
        { userId: user._id },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '24h' } // ✅ corrigé aussi ici
      ),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
