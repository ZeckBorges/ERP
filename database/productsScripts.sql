CREATE TABLE Produtos (
  ID INT PRIMARY KEY IDENTITY,
  Nome NVARCHAR(100) NOT NULL,
  Descricao NVARCHAR(255) NULL,
  Preco DECIMAL(10, 2) NOT NULL,
  QuantidadeEstoque INT NOT NULL DEFAULT 0,
  DataCriacao DATETIME DEFAULT GETDATE(),
  DataAlteracao DATETIME DEFAULT GETDATE()
);