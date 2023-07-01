SELECT alu.legajo, alu.nombre AS 'Nombre y Apellido', esc.id, esc.nombre AS 'Escuela'
FROM alumnos AS alu
LEFT JOIN escuelas AS esc ON esc.id = alu.id_escuela;
