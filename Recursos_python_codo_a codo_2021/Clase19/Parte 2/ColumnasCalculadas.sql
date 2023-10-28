drop table if exists libros;

 create table libros(
  codigo int unsigned auto_increment,
  titulo varchar(40) not null,
  autor varchar(30),
  editorial varchar(15),
  precio decimal(5,2) unsigned,
  cantidad smallint unsigned,
  primary key (codigo)
 );
 
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('El Aleph','Borges','Planeta',15,100);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('Martin Fierro','Jose Hernandez','Emece',22.20,200);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('Antologia Poética','Borges','Planeta',40,150);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('Aprenda PHP','Mario Molina','Emece',18.20,200);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('Cervantes y el Quijote','Borges','Paidos',36.40,100);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('Manual de PHP', 'J.C. Paez', 'Paidos',30.80,100);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('Harry Potter y la Piedra Filosofal','J.K. Rowling','Paidos',45.00,500);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('Harry Potter y la Cámara Secreta','J.K. Rowling','Paidos',46.00,300);
 insert into libros (titulo,autor,editorial,precio,cantidad)
  values('Alicia en el País de las Maravillas','Lewis Carroll','Paidos',null,50);
  
 select titulo, precio,cantidad,precio*cantidad
  from libros;  
  
 select titulo, precio,precio*0.1,precio-(precio*0.1)
  from libros;   
