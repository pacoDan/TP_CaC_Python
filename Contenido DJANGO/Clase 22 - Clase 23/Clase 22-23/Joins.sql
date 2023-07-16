CREATE TABLE clientes(
    id_cliente int unsigned AUTO_INCREMENT,
    nombre varchar(40) NOT NULL,
    contacto int unsigned NOT NULL,
    PRIMARY KEY (id_cliente)
);

CREATE TABLE pedidos(
  id_pedido int unsigned AUTO_INCREMENT,
  id_cliente int unsigned,
  factura int unsigned NOT NULL, 
  PRIMARY KEY(id_pedido)
);

ALTER TABLE pedidos AUTO_INCREMENT=233;

INSERT INTO clientes (nombre,contacto) 
VALUES ('Marco Lambert',456443552),
       ('Lydia Roderic',445332221),
       ('Ebbe Therese',488982635),
       ('Sofie Mariona',412436773);

INSERT INTO pedidos (id_cliente,factura) 
VALUES (4,160),
       (2,48),
       (3,64),
       (4,92),
       (10,550);

SET FOREIGN_KEY_CHECKS = 0;
ALTER TABLE pedidos ADD FOREIGN KEY(id_cliente) REFERENCES clientes(id_cliente);
SET FOREIGN_KEY_CHECKS = 1;

SELECT c.id_cliente,c.nombre,p.id_pedido 
FROM clientes c
INNER JOIN pedidos p 
ON c.id_cliente=p.id_cliente;

SELECT c.id_cliente,c.nombre,p.id_pedido 
FROM clientes c
LEFT JOIN pedidos p 
ON c.id_cliente=p.id_cliente;

SELECT c.id_cliente,c.nombre,p.id_pedido 
FROM clientes c
RIGHT JOIN pedidos p 
ON c.id_cliente=p.id_cliente;

SELECT c.id_cliente,c.nombre,p.id_pedido 
FROM clientes c
LEFT JOIN pedidos p 
ON c.id_cliente=p.id_cliente

UNION

SELECT c.id_cliente,c.nombre,p.id_pedido 
FROM clientes c
RIGHT JOIN pedidos p 
ON c.id_cliente=p.id_cliente;



