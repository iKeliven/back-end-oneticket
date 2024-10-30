const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middlewares globais
app.use(express.json());

// Usar as rotas de usuários
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
