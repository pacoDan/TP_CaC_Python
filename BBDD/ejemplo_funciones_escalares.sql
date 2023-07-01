SELECT nDIEmp, upper(nomEmp) AS 'Nombre y Apellido', year(fecNac) AS 'Año Nac',
year(now()) - year(fecNac) AS 'Edad', salEmp+comisionE AS 'Sueldo $AR',
round((salEmp+comisionE)/300,2) AS 'Sueldo U$S',
cargoE AS 'Cargo', replace(cargoE,'Investigador','Científico') AS 'Nuevo Cargo'
FROM empleados_departamentos.empleados;