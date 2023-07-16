DROP TABLE IF EXISTS libros;

CREATE TABLE libros(
  codigo int unsigned AUTO_INCREMENT,
  titulo varchar(60) NOT NULL,
  autor varchar(30),
  editorial varchar(15),
  precio decimal(5,2) UNSIGNED,
  PRIMARY KEY (codigo)
 );

INSERT INTO libros (titulo,autor,editorial,precio)
VALUES('El Aleph','Borges','Planeta',15),
      ('Martin Fierro','Jose Hernandez','Emece',22.20),
      ('Antología poética','Borges','Planeta',40),
      ('Aprenda PHP','Mario Molina','Emece',18.20),
      ('Cervantes y el Quijote','Borges','Paidos',36.40),
      ('Manual de PHP', 'J.C. Paez', 'Paidos',30.80),
      ('Harry Potter y la Piedra Filosofal','J.K. Rowling','Paidos',45.00),
      ('Harry Potter y la Cámara Secreta','J.K. Rowling','Paidos',46.00),
      ('Alicia en el País de las Maravillas','Lewis Carroll','Paidos',null);

-- Queremos averiguar la cantidad de libros agrupados por editorial:
SELECT editorial, count(*) FROM libros
GROUP BY editorial;

-- Queremos conocer la cantidad de libros agrupados por editorial pero considerando
-- sólo los que devuelvan un valor mayor a 2
SELECT editorial, count(*) FROM libros
GROUP BY editorial
HAVING count(*)>2;

-- Necesitamos el promedio de los precios de los libros agrupados por editorial:
SELECT editorial, avg(precio) AS promedio FROM libros
GROUP BY editorial;

-- sólo queremos aquellos cuyo promedio supere los 25 pesos:
SELECT editorial, avg(precio) FROM libros
GROUP BY editorial
HAVING avg(precio)>25;

-- Queremos contar los registros agrupados por editorial sin tener en cuenta
-- a la editorial "Planeta"
SELECT editorial, count(*) FROM libros
WHERE editorial<>'Planeta'
GROUP BY editorial;

SELECT editorial, count(*) FROM libros
GROUP BY editorial
HAVING editorial<>'Planeta';

 -- Queremos la cantidad de libros, sin tener en cuenta los que tienen precio nulo,
 -- agrupados por editorial, rechazando los de editorial "Planeta"
SELECT editorial, count(*) FROM libros
WHERE precio IS NOT NULL
GROUP BY editorial
HAVING editorial<>'Planeta';

-- promedio de los precios agrupados por editorial, de aquellas editoriales
-- que tienen más de 2 libros 
SELECT editorial, avg(precio) FROM libros
GROUP BY editorial
HAVING count(*) > 2; 

-- mayor valor de los libros agrupados por editorial y luego seleccionar las filas
-- que tengan un valor mayor o igual a 30 
SELECT editorial, max(precio) FROM libros
GROUP BY editorial
HAVING max(precio)>=30; 

-- Para esta misma sentencia podemos utilizar un "alias" para hacer referencia a la
-- columna de la expresión
SELECT editorial, max(precio) AS mayor FROM libros
GROUP BY editorial
HAVING mayor>=30;
