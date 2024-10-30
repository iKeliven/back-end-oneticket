const verificarProdutor = async (req, res, next) => {
    const usuarioId = req.header('usuarioId');
    const usuario = await prisma.usuario.findUnique({ where: { id: parseInt(usuarioId) } });
  
    if (usuario && usuario.tipo === 'PRODUTOR_GERENTE') {
      next(); // Produtor pode continuar
    } else {
      res.status(403).json({ message: 'Acesso negado. Permissão insuficiente.' });
    }
  };