CREATE TABLE visitantes(
  nombre varchar(30),
  edad tinyint unsigned,
  sexo char(1),
  domicilio varchar(30),
  ciudad varchar(20),
  telefono varchar(11),
  montocompra decimal (6,2) unsigned
);

INSERT INTO visitantes (nombre,edad,sexo,domicilio,ciudad,telefono,montocompra)
VALUES ('Susana Molina', 28,'f','Colon 123','Cordoba',null,45.50),
       ('Marcela Mercado',36,'f','Avellaneda 345','Cordoba','4545454',0),
       ('Alberto Garcia',35,'m','Gral. Paz 123','Alta Gracia','03547123456',25),
       ('Teresa Garcia',33,'f','Gral. Paz 123','Alta Gracia','03547123456',0),
       ('Roberto Perez',45,'m','Urquiza 335','Cordoba','4123456',33.20),
       ('Marina Torres',22,'f','Colon 222','Villa Dolores','03544112233',25),
       ('Julieta Gomez',24,'f','San Martin 333','Alta Gracia','03547121212',53.50),
       ('Roxana Lopez',20,'f','Triunvirato 345','Alta Gracia',null,0),
       ('Liliana Garcia',50,'f','Paso 999','Cordoba','4588778',48),
       ('Juan Torres',43,'m','Sarmiento 876','Cordoba','4988778',15.30);

SELECT * FROM visitantes;

-- Para saber la cantidad de visitantes que tenemos de cada ciudad tipeamos:
SELECT ciudad, count(*) FROM visitantes
GROUP BY ciudad;

-- Necesitamos conocer la cantidad visitantes con teléfono no nulo, de cada ciudad:
SELECT ciudad, count(telefono) FROM visitantes
GROUP BY ciudad;

-- Queremos conocer el total de las compras agrupadas por sexo:
SELECT sexo, sum(montocompra) FROM visitantes
GROUP BY sexo;

-- Para obtener el máximo y mínimo valor de compra agrupados por sexo:
SELECT sexo, max(montocompra) FROM visitantes
GROUP BY sexo;

SELECT sexo, min(montocompra) FROM visitantes
GROUP BY sexo;
  
-- Se pueden simplificar las 2 sentencias anteriores en una sola sentencia, ya que usan el mismo "group by":
SELECT sexo, max(montocompra),min(montocompra) FROM visitantes
GROUP BY sexo;

-- Queremos saber el promedio del valor de compra agrupados por ciudad:
SELECT ciudad, avg(montocompra) FROM visitantes
GROUP BY ciudad;

-- Contamos los registros y agrupamos por 2 campos, "ciudad" y "sexo":
SELECT ciudad, sexo, count(*) FROM visitantes
GROUP BY ciudad,sexo
ORDER BY ciudad;

-- Limitamos la consulta, no incluimos los visitantes de "Cordoba", contamos y agrupar por ciudad:
SELECT ciudad, count(*) FROM visitantes
WHERE ciudad<>'Cordoba'
GROUP BY ciudad;
