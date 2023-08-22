DROP DATABASE IF EXISTS projeto_html;

CREATE DATABASE IF NOT EXISTS projeto_html;

use projeto_html;

CREATE TABLE categoria(
    codigo int AUTO_INCREMENT primary key,
    nome varchar(20),
    descricao varchar(50)
);

INSERT INTO categoria(nome, descricao) 
    VALUES
        ('games', 'ps1, ps2, ps3, x-box'),
        ('computadores de mesa', 'ps1, ps2, ps3, x-box'),
        ('notebooks escritório', 'ps1, ps2, ps3, x-box'),
        ('notebooks games', 'ps1, ps2, ps3, x-box')
    ;