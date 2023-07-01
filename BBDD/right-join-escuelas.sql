SELECT esc.*, alu.nombre AS 'Nombre y Apellido'
FROM escuelas esc
RIGHT JOIN alumnos alu ON alu.id_escuela = esc.id;
