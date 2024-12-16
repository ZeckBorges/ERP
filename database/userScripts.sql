CREATE TABLE Usuarios (
  ID INT PRIMARY KEY IDENTITY,
  Nome NVARCHAR(100) NOT NULL,
  Email NVARCHAR(100) NOT NULL UNIQUE,
  Senha NVARCHAR(255) NOT NULL,
  NivelAcesso NVARCHAR(20) NOT NULL,  -- Campo para o nível de acesso
  DataCriacao DATETIME DEFAULT GETDATE(),
  DataAlteracao DATETIME DEFAULT GETDATE()
);
