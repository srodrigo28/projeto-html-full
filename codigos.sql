CREATE DATABASE projeto_html;

use projeto_html;

CREATE TABLE categoria(
    codigo int AUTO_INCREMENT primary key,
    nome varchar(20),
    descricao varchar(50)
);

INSERT INTO 
    categoria(nome, descricao) 
    value('games', 'ps1, ps2, ps3, x-box');