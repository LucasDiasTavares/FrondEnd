const texts = ['websites', 'logos', 'propagandas'];
/* Contador para os texts */
let count = 0;
/* index para cada letra */
let index = 0;
/* para verificar se já completou o texto*/
let currentText = '';
/* para verificar se já completou a palavra */
let letter = '';

/* função normal */
(function type(){
  /* verifica se o contador já passou por cada levra da palavra*/
  if(count === texts.length){
    /* se já ele zera */
    count = 0;
  }
  /*O texto atual vai receber a palavra nova que já passou pelo contador*/
  currentText = texts[count];
  /*cada letra vai se agrupar e vai incrementar +1 no index do meu array*/
  letter = currentText.slice(0, ++index);

  document.querySelector(".escrevendo").textContent = letter;
  if (letter.length === currentText.length){
    /*incrementa para a próxima palavra*/
    count++;
    index = 0;
  }
  /*Velocidade que as letras são 'escritas' na tela*/
  setTimeout(type, 400);

}());