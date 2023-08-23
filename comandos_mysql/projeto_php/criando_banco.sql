DROP DATABASE IF EXISTS db_gestao;

CREATE DATABASE IF NOT EXISTS db_gestao;

use db_gestao;

CREATE TABLE produtos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) UNIQUE,
    descricao VARCHAR(100),
    quantidade INT,
    valor_compra float(10,2),
    valor_venda float(10,2)
);

INSERT INTO produtos(nome, descricao, quantidade, valor_compra, valor_venda)
VALUES
    ('jogos ps5 1', 'diversos jogos mesmo preço', 10, 199, 299),
    ('jogos ps4 2', 'diversos jogos mesmo preço', 5, 99, 199),
    ('jogos ps3 3', 'diversos jogos mesmo preço', 10, 49, 149),
    ('jogos ps2 4', 'diversos jogos mesmo preço', 10, 180, 249),
    ('jogos ps1 5', 'diversos jogos mesmo preço', 10, 159, 249),
    ('jogos ps0 6', 'diversos jogos mesmo preço', 10, 169, 249),
    ('xbox 1 2020', 'diversos jogos mesmo preço', 10, 169, 249),
    ('xbox 2 2020', 'diversos jogos mesmo preço', 10, 169, 249),
    ('xbox 3 2020', 'diversos jogos mesmo preço', 10, 169, 249),
    ('xbox 4 2021', 'diversos jogos mesmo preço', 10, 169, 249),
    ('nintendo 1 2021', 'diversos jogos mesmo preço', 10, 169, 249),
    ('nintendo 2 2021', 'diversos jogos mesmo preço', 10, 169, 249),
    ('nintendo 3 2022', 'diversos jogos mesmo preço', 10, 169, 249),
    ('nintendo 4 2022', 'diversos jogos mesmo preço', 10, 169, 249)
;

SELECT * FROM produtos;

SELECT nome, valor FROM produtos;