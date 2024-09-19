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
// const vetor = ['A', 10, 'OI', 1.5, true];
// const numeros = [1,2,3,4,5];
// const frutas = ['maçãs', 'laranjas', 'peras', 'uvas'];

// // OBTER UM VALOR
// console.log(frutas[0]);
// console.log(frutas[1]);

// // ADICIONAR UM VALOR NO VETOR
// frutas[4] = "melancia";
// console.log(frutas);

// //ALTERAR UM ELEMENTO DO VETOR
// // ACESSANDO UM ELEMENTO DO VETOR
// frutas[1] = "limao";
// console.log(frutas);

// // SÃO METÓDOS DE VETORES
// //ADICIONAR UM ELEMENTO NO FINAL DO VETOR
// frutas.push("morangos");
// console.log(frutas);

// //ADICIONAR UM ELEMENTO NO INICIO DO VETOR
// frutas.unshift("mangas");
// console.log(frutas);

// //REMOVER UM ELEMENTO NO FIM DO VETOR
// const fruta_removida = frutas.pop();
// console.log(frutas);
// console.log(fruta_removida);

// //REMOVER UM ELEMENTO NO INICIO DO VETOR
// const fruta_removida1 = frutas.shift();
// console.log(frutas);
// console.log(fruta_removida1);

// //RETORNAR O INDECE DO LIMAO NO VETOR FRUTAS
// console.log(frutas.indexOf("limao"));

// //SABER SE E UM VETOR
// console.log(Array.isArray(frutas));
// console.log(Array.isArray(10));

//********************************************
//OBJETOS
// const pessoa = {
//     nome: "Thiago",
//     sobrenome: "R. da Costa",
//     passatempos: ["musicas", "filmes", "esportes"],
//     idade: 18,
//     endereco: {
//         rua: "2 avenida",
//         cidade: "Girassol",
//         estado: "GO"
//     }
// }

// // ACESSANDO UMA PROPRIEDADE DO OBJETO.
// console.log(pessoa.nome);
// // ACESSANDO UM ELEMENTO DE UMA PROPRIEDADE VETOR
// console.log(pessoa.passatempos[0]);

// // ACESSAR UMA PROPRIEDADE DE UMA PROPRIEDADE
// console.log(pessoa.endereco.rua);

// // DEFINIR UMA NOVA PROPRIEDADE
// pessoa.email = "thiago@hotmail.com";
// console.log(pessoa);


// // UM VETOR DE OBJETOS
// const tarefas = [
//     {
//         id: 1,
//         texto: "Tirar o lixo",
//         completo: false
//     },
//     {
//         id: 2,
//         texto: "varrer a casa",
//         completo: true
//     },
//     {
//         id: 3,
//         texto: "passar pano",
//         completo: true
//     }
// ];

// // ACESSAR UMA PROPRIEDADE DE UM ELEMENTO ESPECIFICO
// console.log(tarefas[0].texto);

// // FORMATAR UM OJETO COM JSON.STRING
// JSON.stringify(tarefas);
// // IMPRIMIR OS OBJETOS
// console.log(JSON.stringify(tarefas));
// console.log(JSON.stringify(pessoa));


//************************************************ */

//ESCTURURAS CONDICIONAIS IF E ELSE
// const x = 10;
// const y = 10;

//IF E ELSE 
// if (x == y) {
//     console.log("x é igual a y");
// }else {
//     console.log("x não é igual a y");
// }

//ELSE IF 
// if (x > y) {
//     console.log("x é maior que y");
// } else if (x < y) {
//     console.log("x é menor que y");
// } else if ( x == y) {
//     console.log("x é igual a y");
// }

//CODIGO MELHORADO
// if (x > y) {
//     console.log("x é maior que y");
// } else if (x < y) {
//     console.log("x é menor que y");
// } else {
//     console.log("x é igual a y");
// }


// ESTRUTURA CONDICIONAL SWITCH
// const cor = "azul";

// switch (cor) {
//     case "vermelho": console.log("a cor é vermelho");
//     break;
//     case "verde": console.log("a cor é verde");
//     break;
//     case "azul": console.log("a cor é azul");
//     break;
//     default: console.log("a cor não é vermelho, nem verde, nem azul");
// }


// let numero;
// if (cor=="azul") {
//     numero = 10;
// }else {
//     numero = 20;
// }

// OPERADOR TERNÁRIO. ESSA EXPRESSÃO E IGUAL A DE CIMA.
// let numero = cor == "vermelho" ? 10 : 20;

// console.log(numero);


//*******************************************

//ESTRUTURAS DE REPETIÇÃO
//WHILE é enquanto...
// let i = 0;
// while (i < 5) {
//     console.log("uhuuu");
//     // i = contador + 1;
//     // i +=1;
//     i ++;
// }

//FOR SIGNIFICA PARA CADA UMA DELAS...
//DENTRO DOS PARENTESES  1º INICIALIZAÇÃO, 2º CONDIÇÃO, 3º ATUALIZAÇÃO.
// for (let i = 0; i < 5; i++){
//     console.log(`Número da repetição for: ${i}`)
// }

//TESTE VETOR.
// const tarefas = [
//     {
//         id: 1,
//         texto: "tirar o lixo",
//         completo: false,
//     },
//     {
//         id: 2,
//         texto: "Jantar com esposa",
//         completo: false,
//     },
//     {
//         id: 3,
//         texto: "Reunião com chefe",
//         completo: true,
//     }
// ];

// for ( i = 0; i < tarefas.length; i++) {
//     console.log(`Tarefas ${i}: ${tarefas[i].texto}`)
// }

//FOR SIMPLIFICADO QUE PERCORRE TODO VETOR
// for (let tarefa of tarefas) {
//     console.log(tarefa)
// }

//******************************************
//FUNÇOES
// function dizer_ola(nome) {
//     console.log("olá " + nome);
// }

// dizer_ola("THIAGO"); //ARGUMENTO P FUNÇÃO.
// dizer_ola("MARY"); //ARGUMENTO P FUNÇÃO.
// dizer_ola("IRENE"); //ARGUMENTO P FUNÇÃO.

//FUNÇÃO SEM ARGUMENTO, DEFININDO UM VALOR CASO NÃO HAJA ARGUMENTO.
// function dizer_ola(nome="Fulano") {
//     console.log("olá " + nome);
// }

// dizer_ola(); //SEM ARGUMENTO P FUNÇÃO.

// //FUNÇÃO COM MAIS DE UM ARGUMENTO
// function se_apresentar(nome, idade) {
//     console.log("Meu nome é: " + nome);
//     console.log("Eu tenho " +idade + " anos de idade");
// }

// se_apresentar("MARY", 36);
// se_apresentar("THIAGO", 36);


// //FUNÇOES QUE RETORNAM VALORES
// function criar_nome_completo(nome, sobrenome) {
//     return `${nome} ${sobrenome}`;
// }

// const nomeCompleto = criar_nome_completo("THIAGO", "REDUZINO");
// console.log(nomeCompleto);

//FUNÇÃO COM CONDIÇÃO
// function criar_nome_completo(nome, sobrenome, sexo) {
//     if(sexo == "M") {
//         return `Sr. ${nome} ${sobrenome}`;
//     }else if (sexo == "F") {
//         return `Sra. ${nome} ${sobrenome}`;
//     }else {
//         return `${nome} ${sobrenome}`;
//     }
// };

// const nomeCompleto = criar_nome_completo("THIAGO", "REDUZINO", "M");
// const nomeCompleto2 = criar_nome_completo("MARY", "BIDIAN", "F");
// const nomeCompleto3 = criar_nome_completo("ROSA", "BIDIAN",);

// console.log(nomeCompleto);
// console.log(nomeCompleto2);
// console.log(nomeCompleto3);

//ARROW FUNCTION
// const dizer_oi = () => console.log("Essa e uma função Arrow Function");
// dizer_oi();

// const tudoBem = () => {
//     console.log("Olá");
//     console.log("Tudo bem?");
// }

// tudoBem();

// const somar = (x, y) => {
//     return x + y;
// }

// const resultado = somar(10, 15);
// console.log(resultado);