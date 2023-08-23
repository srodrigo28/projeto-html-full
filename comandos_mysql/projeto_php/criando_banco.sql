DROP DATABASE IF EXISTS db_gestao;

CREATE DATABASE IF NOT EXISTS db_gestao;

use db_gestao;

CREATE TABLE produtos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) UNIQUE,
    descricao VARCHAR(100),
    quantidade INT,
    valor float(10,2)
);

INSERT INTO produtos(nome, descricao, quantidade, valor)
VALUES
    ('jogos ps5', 'diversos jogos mesmo preço', 10, 199),
    ('jogos ps4', 'diversos jogos mesmo preço', 5, 99),
    ('jogos ps3', 'diversos jogos mesmo preço', 10, 49)
;

SELECT * FROM produtos;

SELECT nome, valor FROM produtos;