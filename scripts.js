idade = prompt ("Primeiramente precisamos saber sua idade guerreiro! Digite-a aqui!")
if(idade < 18 ) {
  alert("Treine mais guerreiro... Retorne quando for maior de idade!")
}

if(idade >= 18) {
  escolhaJogador = prompt (
    "Quando entra no Labirinto o clamor dos emocionados espectadores vai diminuindo gradualmente às suas costas enquanto você se aventura pela escuridão do túnel cavernoso. Depois de avançar devagar pelo túnel por mais ou menos cinco minutos, você chega a uma mesa de madeira posta contra a parede à sua esquerda. Sobre ela, seis caixas, uma das quais tem seu nome pintado na tampa. Se quiser abrir a caixa, digite o NÚMERO 1 ou se preferir continuar avançando para o norte, aperte o NÚMERO 2. Se quiser avançar para o sul, digite o número 3. Mas se preferir ir ao Sudoeste, digite o número 4")
  escolhaComputador = Math.floor(Math.random() * 4) + 1;

// quando for IGUAL
// Jogador aperta o número 1, Computador aperta o número 1 --> Empate! mesma situação se os dois apertarem 2, 3 ou 4
   if (escolhaJogador == escolhaComputador) {
    alert ("Você escorrega e cai em uma câmara escura cheia de restos de esqueletos. Antes que você possa fazer algo uma voz murmura algumas palavras estranhas no ar. Você sente seus músculos endurecerem e sua pele enrijecer. Você começa a entrar em pânico, mas não há nada qeu você possa fazer para impedir a petrificação do seu corpo. Sua aventura acaba aqui.")
  }

// Jogador caminho 1; Computador Caminho 2 --> História 1
if (escolhaJogador == 1) {
  if (escolhaComputador == 2)
alert ("A tampa da caixa abre facilmente. Dentro você encontra 2 peças de ouro e um pequeno pergaminho endereçada a você dizendo: - Muito bem! Pelo menos você tem bom senso de parar e tirar vantagem desta pequena ajuda que lhe dou. Mas atenção... você vai precisar mais do que isso para conseguir triunfar na minha Masmorra da Morte. Ass. Sukumvit. Você decora o recado e rasga em pedaços o pergaminho e caminha em direção ao norte...")
}

if (escolhaJogador == 1) {
  if (escolhaComputador == 3)
    alert ("O túnel leva a uma câmara escura coberta de teias espessas.Cortando seu caminho através delas você bate em um caixão de madeira bem degastado...")
}

if (escolhaJogador == 1) {
  if (escolhaComputador == 4)
    alert ("O túnel leva a um aposento grande, cujo teto é segurado por vários pilares de mármore. Quando você entra nele, você vê uma criatura estranha à direita. Ela tem o corpo de um leão com asas parecidas com as de um dragão, mas a cabeça parece a de um velho barbudo. Você decide passar desapercebido e se escondendo nas pilastras seguindo para o Sul...")
}

if (escolhaJogador == 2) {
  if (escolhaComputador == 1)
    alert ("A tampa da caixa abre facilmente. Dentro você encontra 2 peças de ouro e um pequeno pergaminho endereçada a você dizendo: - Muito bem! Pelo menos você tem bom senso de parar e tirar vantagem desta pequena ajuda que lhe dou. Mas atenção... você vai precisar mais do que isso para conseguir triunfar na minha Masmorra da Morte. Ass. Sukumvit. Você decora o recado e rasga em pedaços o pergaminho e caminha em direção ao norte...")
}

if (escolhaJogador == 2) {
  if (escolhaComputador == 3)
    alert ("Depois de descer o túnel por alguns minutos, você chega a uma bifurcação. Uma flecha branca pintada na parede aponta para o oeste. No chão você vê pegadas úmidas daqueles que entraram antes de você. É difícil ter certeza, mas parece que três deles seguiram a flecha, enquanto outro decidiu ir para o leste. Você decide ir para o Oeste na esperança de ir onde a maioria está caminhando...")
}

if (escolhaJogador == 2) {
  if (escolhaComputador == 4)
    alert ("Depois de descer o túnel por alguns minutos, você chega a uma bifurcação. Uma flecha branca pintada na parede aponta para o oeste. No chão você vê pegadas úmidas daqueles que entraram antes de você. É difícil ter certeza, mas parece que três deles seguiram a flecha, enquanto outro decidiu ir para o leste. Você decide ir para o Oeste na esperança de ir onde a maioria está caminhando...")
}

if (escolhaJogador == 3) {
  if (escolhaComputador == 1)
    alert ("O túnel leva a uma câmara escura coberta de teias espessas.Cortando seu caminho através delas você bate em um caixão de madeira bem degastado..")
}

if (escolhaJogador == 3) {
  if (escolhaComputador == 2)
    alert ("O túnel leva a um aposento grande, cujo teto é segurado por vários pilares de mármore. Quando você entra nele, você vê uma criatura estranha à direita. Ela tem o corpo de um leão com asas parecidas com as de um dragão, mas a cabeça parece a de um velho barbudo. Você decide passar desapercebido e se escondendo nas pilastras seguindo para o Sul...")
}

if (escolhaJogador == 3) {
  if (escolhaComputador == 4)
    alert ("A tampa da caixa abre facilmente. Dentro você encontra 2 peças de ouro e um pequeno pergaminho endereçada a você dizendo: - Muito bem! Pelo menos você tem bom senso de parar e tirar vantagem desta pequena ajuda que lhe dou. Mas atenção... você vai precisar mais do que isso para conseguir triunfar na minha Masmorra da Morte. Ass. Sukumvit. Você decora o recado e rasga em pedaços o pergaminho e caminha em direção ao norte...")
}

if (escolhaJogador == 4) {
  if (escolhaComputador == 1)
    alert ("O túnel leva a um aposento grande, cujo teto é segurado por vários pilares de mármore. Quando você entra nele, você vê uma criatura estranha à direita. Ela tem o corpo de um leão com asas parecidas com as de um dragão, mas a cabeça parece a de um velho barbudo. Você decide passar desapercebido e se escondendo nas pilastras seguindo para o Sul...")
}

if (escolhaJogador == 4) {
  if (escolhaComputador == 2)
    alert ("O túnel leva a uma câmara escura coberta de teias espessas.Cortando seu caminho através delas você bate em um caixão de madeira bem degastado..")
}

if (escolhaJogador == 4) {
  if (escolhaComputador == 3)
    alert ("A tampa da caixa abre facilmente. Dentro você encontra 2 peças de ouro e um pequeno pergaminho endereçada a você dizendo: - Muito bem! Pelo menos você tem bom senso de parar e tirar vantagem desta pequena ajuda que lhe dou. Mas atenção... você vai precisar mais do que isso para conseguir triunfar na minha Masmorra da Morte. Ass. Sukumvit. Você decora o recado e rasga em pedaços o pergaminho e caminha em direção ao norte...")
}
  
alert("Computador escolhe: " + escolhaComputador)


}

  // Parte 2
if(idade >= 18) {  
  escolhaJogador1 = prompt ("Escolha digitando um dos números: Caminho 1 ou Caminho 2 ?")
  escolhaComputador1 = Math.floor(Math.random() * 2) + 1;

// quando for IGUAL
// Jogador aperta o número 1, Computador aperta o número 1 --> Empate! mesma situação se os dois apertarem 2 ou 3
   if (escolhaJogador1 == escolhaComputador1) {
    alert ("Você escorrega e cai em uma câmara escura cheia de restos de esqueletos. Antes que você possa fazer algo uma voz murmura algumas palavras estranhas no ar. Você sente seus músculos endurecerem e sua pele enrijecer. Você começa a entrar em pânico, mas não há nada qeu você possa fazer para impedir a petrificação do seu corpo. Sua aventura acaba aqui.")
  }

  if (escolhaJogador1 = 1) {
    if (escolhaComputador1 = 2)
      alert ("O túnel serpenteia e vira, mas vai em direção ao Norte. A frente você vê um fino facho de luz azul saindo do teto do túnel. Ele brilha e cintila, e você vê imagens de rostos sorrindo na luz... você fica tentado a entrar no facho de luz e tudo fica branco... você perde a memória...")
  }
  
   if (escolhaJogador1 = 2) {
    if (escolhaComputador1 = 1)
      alert ("O túnel serpenteia e vira, mas vai em direção ao Norte. A frente você vê um fino facho de luz azul saindo do teto do túnel. Ele brilha e cintila, e você vê imagens de rostos sorrindo na luz... você fica tentado a entrar no facho de luz e tudo fica branco... você perde a memória...")
  }
  
  alert("Computador escolhe: " + escolhaComputador1)
}
