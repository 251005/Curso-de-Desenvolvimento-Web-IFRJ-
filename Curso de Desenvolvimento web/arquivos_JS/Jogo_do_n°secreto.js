'use strict'
function jogo_n_secreto(){

    // número ramdomizado
    let numero = Math.floor(Math.random() * (1 + 101));
    
    // numero de vezes jogadas até acertar
    let vezes_jogadas = 1;




    // botão de chutar numero
    let btn_imput = document.getElementById('enviar_n_imput');


    // evento de click do botão de chutar numero
    btn_imput.addEventListener('click', ()=>{


            // numero adicionado no imput
        let numero_imput = document.getElementById('numero_imput');

        let parametro_game = document.getElementById('parametro_n_secreto');


        if((numero_imput.value != '' || null) && (numero_imput.value > 0 && numero_imput.value < 101)){
            if(numero_imput.value == numero){
                parametro_game.innerHTML = 'Parabéns! <span>você acertou o n° secreto em: '+ vezes_jogadas + ' jogadas </span>' ;
                
                // desabilita a função de interação com o imput
                numero_imput.readOnly = true;

            }
            else{
                // adiciona 1 a cada vez que ele entra no else
                vezes_jogadas++

                // se o numero escolhido for maior que o numero secreto
                if(numero_imput.value > numero){
                    parametro_game.innerHTML = 'N° secreto é <span>menor!</span>' ; 
                    numero_imput.value = '';
                }
                // se o numero escolhido for menor que o numero secreto
                else if(numero_imput.value < numero){
                    parametro_game.innerHTML = 'N° secreto é <span>maior!</span>' ; 
                    numero_imput.value = '';
                }
            }
        }
        else{
            parametro_game.innerHTML = 'O N° secreto fica entre <span>1 e 100, não se esqueça!</span>' ; 
        }
    });

    let reiniciar = document.getElementById('reiniciar');
    reiniciar.addEventListener('click', ()=>{
        
        // espaço que da os parametros/norte do game 
        let parametro_game = document.getElementById('parametro_n_secreto');
        parametro_game.innerHTML = 'Escolha um número de <span>1 a 100</span>' ;

        // numero adicionado no imput
        let numero_imput = document.getElementById('numero_imput');
        numero_imput.value = '';

        // habilita o imput para preenchimento
        numero_imput.readOnly = false;


        // reinicia a função responsavel pelo game 
        jogo_n_secreto();
    });

}

jogo_n_secreto();
