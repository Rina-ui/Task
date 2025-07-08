import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token manquant ou invalide.' });
  }

  const token = authHeader.split(' ')[1]; // "Bearer TOKEN"

  try {
    const decoded = jwt.verify(token, 'RANDOM_SECRET_KEY');
    req.userId = decoded.userId; // tu peux ensuite y accéder dans tes routes
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token invalide.' });
  }
};
