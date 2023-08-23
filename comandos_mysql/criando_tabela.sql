use db_escola;

CREATE TABLE categoria(
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) UNIQUE,
    descricao VARCHAR(50)
);

CREATE TABLE usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) UNIQUE,
    email VARCHAR(50) UNIQUE,
    idade INT,
    is_admin BOOLEAN
);

CREATE TABLE clientes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20),
    email VARCHAR(50) UNIQUE,
    cpf VARCHAR(20) UNIQUE,
    idade INT
);