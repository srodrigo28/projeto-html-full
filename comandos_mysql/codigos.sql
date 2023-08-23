DROP DATABASE IF EXISTS db_escola;

CREATE DATABASE IF NOT EXISTS db_escola;

use db_escola;

CREATE TABLE categoria(
    codigo INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20),
    descricao VARCHAR(50)
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome varchar(255) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE
);

-- OPCIONAL
-- ALTER TABLE usuarios
-- ADD UNIQUE(nome),
-- ADD UNIQUE(email);

CREATE TABLE contas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    status BOOLEAN DEFULT false
);

INSERT INTO categoria(nome, descricao) 
    VALUES
        ('games', 'ps1, ps2, ps3, x-box'),
        ('computadores de mesa', 'ps1, ps2, ps3, x-box'),
        ('notebooks escritório', 'ps1, ps2, ps3, x-box'),
        ('notebooks games', 'ps1, ps2, ps3, x-box')
    ;

SELECT * FROM categoria;

SELECT nome, descricao FROM categoria;

