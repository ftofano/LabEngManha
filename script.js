function tipo_dado() {

    let entrada = prompt("Digte alguma coisa .");

    if (!typeof entrada == "undefined")
        if (isNaN(entrada)) {
            alert("Variavel do tipo string");
        }
        else {
            alert("variável do tipo number");

        }
    else {
        alert("Tente novamente... Tchau Obrigado");
    }
}
function primo() {
    let numero = parseInt(prompt("Digite um número: "));
    if (typeof entrada == "undefined") {
        alert("Algo não está certo...")
    }
    else {
        let resposta = 0;
        let divisores = 0;

        for (let count = 1; count <= numero; count++)
            if (numero % count == 0)
                divisores++;

        if (divisores == 2)
            alert("É primo");
        else
            alert("Não é primo");
    }
    

}

function par_impar() {
    let numero ;
    
    do {
        numero = prompt("Digite um número inteiro positivo!");

        if (isNaN(numero));
        {
            numero = parseInt(numero);
        }

    } while (numero < 0)
    if (numero % 2 == 0) {
        alert("O número digitado é par");
    }
    else {
        alert("O número digitado é impar");
    }
}

function fatorial() {
    let numero = prompt("Digite um número inteiro positivo.");
    let resultado = 1;
    if (numero == 0 || numero == 1) {
        alert("fatorial do número digitado é = " + resultado);
    }
    else {
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        alert("fatorial do número digitado é = " + resultado);
    }

}

var array = [];

function addElemento() {
            var inputValor = document.getElementById("input_value").value;
            event.preventDefault(); //serve para prevenir o comportamento padrão de um evento

            // Verifica se o valor não está vazio
        if (inputValor.trim() !== '') {
            array.push(inputValor);

                // Limpa o campo de entrada
            document.getElementById("input_value").value = '';

            atualizarLista();
        }
}

function atualizarLista() {
            var lista = document.getElementById("lista");
            lista.innerHTML = '';
            array.sort();

            for (var i = 0; i < array.length; i++) {
                var li = document.createElement("li");
                li.textContent = array[i];
                lista.appendChild(li);
            }
          
}

function mostrarData(){

    // Cria o objeto Data
    const agora = new Date();

    // Obtém o dia da semana
    const diaSemana = agora.getDay(); 

    // Obtém o mês
    const mes = agora.getMonth() + 1;

    // Obtém o dia do mês
    const dia = agora.getDate();

    // Obtém o ano 
    const ano = agora.getFullYear();

    // Obtém os dias da semana por extenso
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    // Formata a data
    const dataFormatada = `${diasDaSemana[diaSemana]} ${dia} de ${mes} de ${ano}`;

    // Alerta a data
    alert(dataFormatada);


}







