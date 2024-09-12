//https://www.youtube.com/watch?v=aA31cVca_hI

//  VARIÁVEIS, CONSTANTES E TIPOS DE DADOS
// // NUMBER(NÚMERO)
// const x = 10;
// const y = 2.5;
// // STRING (SEQUENCIA DE CARACTERES)
// const nome = "Thiago";
// const sobrenome = "Reduzino";
// // BOLLEAN (BOOLEANO)
// const verdadeiro = true;
// const falso = false;
// // NULO
// const nulo = null;
// // NAO DEFINIDO
// const nao_definido = undefined;

// // TYPEOF INFORMA QUAL E O TIPO DE DADO DA VARIAVEL,
// // ex: 
// console.log(typeof nome);


// console.log(x);
// console.log(y);
// console.log(nome);
// console.log(sobrenome);
// console.log(verdadeiro);
// console.log(falso);
// console.log(nulo);
// console.log(nao_definido);

//************************************************************************
// OPERADORES
// const x = 4;
// const y = 5;

// const soma = x + y;
// const subtracao = x - y;
// const multiplicacao = x * y;
// const divisao = x / y;
// // const resto_divisao = x % y;

// console.log(soma);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(3 % 2);

// // INCREMENTO E DECREMENTO

// let z = 1;
// z++;
// console.log(z);

// let a = 10;
// a--;
// console.log(a);

// **************************************************************
// OPERADORES DE COMPARAÇÃO
// > MAIOR QUE
// < MENOR QUE
// >= MAIOR OU IGUAL A
// <= MENOR OU IGUAL A
// == IGUAL
// != DIFERENTE

// const a = 1;
// const b = 2;

// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a >= b);
// console.log(a == b);
// console.log(a != b);

// OPERADORES LÓGICOS.

// && E 
// || OU
// !  NEGAÇÃO.

// AQUI AS DUAS COMPARAÇÕES TEM QUE SER VERDADEIRA, PARA QUE SEJA TRUE, CASO CONTRARIO E FALSE
// console.log(a < b && a > b);
// console.log(a < b && a != b);
// console.log(a == b && a > b);

// AQUI PELO MENOS UMAS DAS COMPARAÇOES TEMQ UE SER VERDADEIRA PARA SER TRUE.
// console.log(a < b  || a > b);
// console.log(a == b || a != b);
// console.log(a == b || a > b);

// console.log(!true);
// console.log(!false);

//*******************************************
//STRINGS

// const nome = "Thiago";
// const sobrenome = "Costa";
// const idade = 27;

// // CONCATENAÇÃO
// const apresentacao = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos de idade";
// console.log(apresentacao);

// //TEMPLATE DE SRING
// const apresentacao1 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos de idade.`;
// console.log(apresentacao1);

// //PROPRIEDADES E METODOS DE STRINGS
// const s = "Olá Mundo";
// console.log(s.length); //CONTA O NUMERO DE LETRAS DA VARIAVEL S, AQUI E UMA AÇÃO
// console.log(s.toUpperCase()); //TRANSFORMA AS LETRAS EM MAIUSCULAS PQ E UM METODO
// console.log(s.toLowerCase()); //TRANSFORMA AS LETRAS EM MENUSCULAS
// console.log(s.substring(1, 8)) // VC PODE PEGAR UMA FATIA DA STRING E O ULTIMO NAO E INCLUSO.
// console.log(s.split("u")); // PODEMOS SEPARAR A STRING E RECEBER O QUE ESTA ANTES DO U E DEPOIS, E RECEBEMOS COMO UM VETOR.

//*********************************
//VETOR