 
  // Middleware para verificar se o usuário é Gerente ou Produtor
  const verificarGerenteOuProdutor = async (req, res, next) => {
    const usuarioId = req.header('usuarioId');
    const usuario = await prisma.usuario.findUnique({ where: { id: parseInt(usuarioId) } });
  
    if (usuario && (usuario.tipo === 'PRODUTOR_GERENTE' || usuario.tipo === 'PRODUTOR_ATENDIMENTO')) {
      next(); // Permitir acesso
    } else {
      res.status(403).json({ message: 'Acesso negado. Permissão insuficiente.' });
    }
  };
  