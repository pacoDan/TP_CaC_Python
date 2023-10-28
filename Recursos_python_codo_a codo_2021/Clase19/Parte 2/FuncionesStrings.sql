create table libros(
  codigo int unsigned auto_increment,
  titulo varchar(40) not null,
  autor varchar(30),
  editorial varchar (20),
  precio decimal(5,2) unsigned,
  primary key(codigo)
 );

insert into libros (titulo,autor,editorial,precio)
  values('El Aleph','Borges','Paidos',33.4);
insert into libros (titulo,autor,editorial,precio)
  values('Alicia en el País de las Maravillas','L. Carroll','Planeta',16);

select concat_ws('-',titulo,autor)
  from libros;

select left(titulo,15)
  from libros;
  
select lower(titulo), upper(editorial)
 from libros;
