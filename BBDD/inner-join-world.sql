/*Ejercicio de inner join (WORLD):
Mostrar Código de país, nombre, distrito y nombre de ciudad
Ordenado por país, distrito y ciudad */
SELECT paises.Code AS 'Código', paises.Name 'Pais', ciudades.District AS 'Distrito', ciudades.name AS 'Ciudad'
FROM Country as paises
INNER JOIN city as ciudades ON ciudades.CountryCode = paises.code
WHERE Code IN ('ARG', 'BRA')
ORDER BY Pais, Distrito, Ciudad;