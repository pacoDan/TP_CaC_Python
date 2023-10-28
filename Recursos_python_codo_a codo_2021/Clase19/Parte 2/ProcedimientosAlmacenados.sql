
 create procedure pa_libros_precio_mayor()
 begin
   select * from libros
   where precio>=15;
 end

call pa_libros_precio_mayor();

