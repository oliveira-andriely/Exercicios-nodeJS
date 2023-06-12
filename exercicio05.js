/*Considerando o trecho de programa NodeJS abaixo, qual será o valor final da variável
resultado?.*/
var str = "123456789";
var p = /[^5-7]/g;
var resultado = str.match(p);

/*A variável resultado é definida usando o método match() da string str e a expressão regular p. 
O método match() retorna um array contendo todas as correspondências encontradas na string.
Portanto, o valor final da variável resultado será um array contendo os caracteres que não são 5, 6 ou 7 da string original.
No caso específico do trecho de código fornecido, 
o valor final da variável resultado será o seguinte array: ["1", "2", "3", "4", "8", "9"].
 Isso ocorre porque os caracteres 1, 2, 3, 4, 8 e 9 são os que não são 5, 6 ou 7 na string original "123456789". */