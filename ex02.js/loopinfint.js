//O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o computador, então é importante saber como evitá-lo.

//Os laços de repetição, como o for, são ferramentas essenciais na programação. São utilizados para, entre outras coisas, percorrer arrays e executar blocos de código para cada elemento.

//Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de parada do loop. Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” e entrando em loop infinito.

for (let i = 0; i <= 10; i++){
    console.log(i)
   }

  // O loop infinito pode acontecer caso algum dos parâmetros seja passado de forma incorreta ou esteja faltando. Por exemplo a serem execultados:
   //for (let i = 0; i < 10; ){
    //   console.log(i)
    //  }
   
    //for (let i = 0; ; i++){
     //  console.log(i)
   //   }
   
   //for (let i = 0; i < 10; i++){
      // i--
      // console.log(i)
    //  }