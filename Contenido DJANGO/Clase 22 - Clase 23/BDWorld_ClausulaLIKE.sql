/*1*/
SELECT * FROM country
		 WHERE Name LIKE 'a%';

/*2*/
SELECT * FROM country
		 WHERE Name LIKE '%a';

/*3*/
SELECT * FROM country
		 WHERE Name LIKE '%or%';

/*4*/
SELECT * FROM country
		 WHERE Name LIKE '_r%';

/*5*/
SELECT * FROM country
		 WHERE Name LIKE 'a%o';

/*6*/
SELECT * FROM country
		 WHERE NAME NOT LIKE 'a%';

/*7*/
SELECT * FROM country
		 WHERE IndepYear IS NULL;

/*8*/
SELECT * FROM country
		 WHERE Region IN("Northern Africa","Caribbean");
         