const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Rota protegida
router.get('/perfil', authMiddleware, (req, res) => {
  res.json({ message: `Bem-vindo, ${req.usuario.nome}` });
});

module.exports = router;
